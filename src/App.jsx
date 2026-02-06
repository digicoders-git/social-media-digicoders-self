import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaGoogle,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import logo from "./assets/logo.png";

function App() {
  const socialCategories = [
    {
      title: "Social Presence",
      links: [
        {
          name: "Facebook",
          icon: <FaFacebook className="text-[#1877F2]" />,
          url: "https://www.facebook.com/DigiCodersTech/",
        },
        {
          name: "LinkedIn",
          icon: <FaLinkedin className="text-[#0A66C2]" />,
          url: "https://www.linkedin.com/company/digicoders/",
        },
        {
          name: "Twitter (X)",
          icon: <FaTwitter className="text-black" />,
          url: "https://twitter.com/DigiCodersTech/",
        },
      ],
    },
    {
      title: "Instagram Presence",
      links: [
        {
          name: "DigiCoders Head Office",
          icon: <FaInstagram className="text-pink-500" />,
          url: "https://www.instagram.com/digicoderstech/",
        },
        {
          name: "DigiCoders Kanpur",
          icon: <FaInstagram className="text-pink-500" />,
          url: "https://www.instagram.com/digicoderstech_kanpur/",
        },
        {
          name: "Life At DigiCoders",
          icon: <FaInstagram className="text-pink-500" />,
          url: "https://www.instagram.com/lifeatdigicoders/",
        },
      ],
    },
    {
      title: "Media & Community",
      links: [
        {
          name: "YouTube",
          icon: <FaYoutube className="text-[#FF0000]" />,
          url: "https://www.youtube.com/@digicoders?sub_confirmation=1",
        },
        {
          name: "WhatsApp Channel",
          icon: <FaWhatsapp className="text-[#25D366]" />,
          url: "https://whatsapp.com/channel/0029VaDTIxW5EjxzOyubYT3l",
        },
        {
          name: "Telegram Channel",
          icon: <FaTelegram className="text-[#229ED9]" />,
          url: "https://t.me/digicoderstech",
        },
      ],
    },
    {
      title: "Trust & Reviews",
      links: [
        {
          name: "Read Google Reviews",
          icon: <FcGoogle className="text-[#4285F4]" />,
          url: "https://www.google.com/maps/place/DigiCoders+Technologies+Private+Limited,+Best+Software%2FWebsite%2FMobile+App+Development+Company+in+Lucknow/@26.9046469,80.9470183,17z/data=!4m18!1m9!3m8!1s0x399bfd90f852511b:0xea3004cdf494ecbb!2sDigiCoders+Technologies+Private+Limited,+Best+Software%2FWebsite%2FMobile+App+Development+Company+in+Lucknow!8m2!3d26.9046421!4d80.9495932!9m1!1b1!16s%2Fg%2F11h37gc4sq!3m7!1s0x399bfd90f852511b:0xea3004cdf494ecbb!8m2!3d26.9046421!4d80.9495932!9m1!1b1!16s%2Fg%2F11h37gc4sq?entry=ttu&g_ep=EgoyMDI2MDIwMy4wIKXMDSoASAFQAw%3D%3D",
        },
        {
          name: "Write Google Reviews",
          icon: <FaGoogle className="text-[#4285F4]" />,
          url: "https://g.page/r/CbvslPTNBDDqEAE/review",
        },
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* HERO SECTION */}
      <section className="w-full flex flex-col items-center justify-center text-center px-4 pt-2 bg-gray-50 sm:py-10 py-10">
        <img
          src={logo}
          alt="DigiCoders Logo"
          className="h-20 sm:h-28 md:h-40 lg:h-48 "
        />

        <p className="font-poppins text-gray-600 flex flex-col mt-3 max-w-3xl sm:max-w-full uppercase">
  <span className="font-bold text-[#0f6a6a] sm:max-w-full">
    "A Company Leading by Young Engineer's, Enterpreneur's and Innovation Team"
  </span>
  <span className="text-[#fb9557] font-bold">
    10+ Years of Experienced Team
  </span>
</p>


        {/* <a
          href="#socials"
          className="mt-8 inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Connect With Us
        </a> */}
      </section>

      {/* SOCIAL LINKS SECTION */}
      <section id="socials" className="pt-2 px-4 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-5">
            Our <span className="text-green-600">Social Presence</span>
          </h2>

          {socialCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {category.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:border-green-500 hover:shadow-md hover:scale-[1.03] transition-all duration-300"
                  >
                    <div className="text-2xl">{link.icon}</div>
                    <span className="font-medium text-gray-700">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-white ">
        © {new Date().getFullYear()} DigiCoders Technologies Pvt. Ltd. | Lucknow
      </footer>
    </div>
  );
}

export default App;
