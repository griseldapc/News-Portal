const Detail = () => {
  return (
    <div className="max-w-5xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 text-black">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            Headline Berita
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-500">
            <div className="flex items-center md:space-x-2">
              <img
                src="https://source.unsplash.com/75x75/?portrait"
                alt=""
                className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700"
              />
              <p className="text-sm">jurnalis</p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              • tgl rilis berita
            </p>
          </div>
        </div>
        <div className="text-black">
          <p>
            PentingBerita.com - Indonesia Mencari Bakat (IMB) jadi salah satu
            ajang bergengsi di Indonesia. 
          </p>
        </div>
      </article>
      <div>
        <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed border-gray-400">
          <div className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:text-gray-900">
            <Link href="/news">Travel</Link>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Related posts</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li className="hover:underline">
              <Link href="/detail">Headline Berita Lain</Link>
            </li>
            <li className="hover:underline">
              <Link href="/detail">Headline Berita Lain</Link>
            </li>
            <li className="hover:underline">
              <Link href="/detail">Headline Berita Lain</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
