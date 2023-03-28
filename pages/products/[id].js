import React from 'react'
import data from "../../public/data/data.json"
import Link from "next/link"

function Detail({ product }) {
    // Find related posts
    const relatedPosts = data.filter((post) => post.category === product.category && post.id !== product.id).slice(0, 2);
    return (
        <div>
            <div className="max-w-5xl px-6 py-16 mx-auto space-y-12">
                <article className="space-y-8 text-black">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
                            {product.title}
                        </h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-500">
                            <div className="flex items-center md:space-x-2">
                                <img
                                    src="https://source.unsplash.com/75x75/?portrait"
                                    alt=""
                                    className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                                />
                                <p className="text-sm">{product.author}</p>
                            </div>
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                                • {product.pubDate}
                            </p>
                        </div>
                    </div>
                    <img src={product.thumbnail} className="w-full" />
                    <div className="text-black text-left">
                        {product.article.slice(0, 4).map((paragraph, index) => (
                            <p className="mb-5 indent-5 text-left" key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    {product.addons && (
                        <img src={product.addons} alt={product.title} className="w-full"/>
                    )}
                    <div className="text-black text-left">
                        {product.article.slice(4).map((paragraph, index) => (
                            <p className="mb-5 indent-5 text-left" key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </article>
                <div>
                    <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed border-gray-400">
                        <div className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:text-gray-900">
                            <Link href="/news">{product.category}</Link>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold">Kategori serupa</h4>
                        <ul className="ml-4 space-y-1 list-disc">
                            {relatedPosts.map((post) => (
                                <li key={post.id} className="hover:underline">
                                    <Link href={`/products/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    try {
        const paths = await data.map((product) => ({
            params: { id: product.id.toString() },
        }));
        return { paths, fallback: false };
    } catch (error) {
        console.log("Error Cuy");
    }
}

export async function getStaticProps({ params }) {
    try {
        const product = await data.find((product) => product.id.toString() === params.id);
        return { props: { product } };
    } catch (error) {
        console.log(error);
    }
}

export default Detail
