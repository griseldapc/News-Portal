import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Berita <span className="text-violet-700">Kosong ‼️</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Kanal</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Style
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Travel
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Sports
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Film & Music
						</li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Health
						</li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Entertainment
						</li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Politic
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Information</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Redaksi
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Pedoman Media Siber
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Karir
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Kotak pos
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Media Partner
						</li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Info Iklan
						</li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Privacy Policy
						</li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Disclaimer
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Network News</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							CNN Indonesia
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							CNBC Indonesia
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Insertlive
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Famale Dayli
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-violet-700 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2023 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-violet-700 font-semibold cursor-pointer">
						Berita Kosong {" "}
					</span>
				</h1>
			</div>
		</>
	);
}
export default Footer;