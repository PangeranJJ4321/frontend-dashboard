import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Atur durasi animasi (optional)
      once: true, // Animasi hanya muncul sekali (optional)
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageXOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scrolling for anchor links
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    if (targetId === "#") return;

    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 100,
        behavior: "smooth",
      });
    }
    setMobileMenu(false);
  };

  return (
    <div className="bg-gray-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-30 transition-all duration-300 ${
          !scroll && !mobileMenu
            ? "bg-gradient-red"
            : "bg-gradient-red shadow-lg"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fas fa-film text-2xl text-white"></i>
            <span className="font-bold text-xl text-white">FilmRisk</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-white hover:text-red-100 transition duration-300 nav-link-underline"
              onClick={(e) => scrollToSection(e, "#features")}
            >
              Fitur
            </a>
            <a
              href="#how-it-works"
              className="text-white hover:text-red-100 transition duration-300 nav-link-underline"
              onClick={(e) => scrollToSection(e, "#how-it-works")}
            >
              Cara Kerja
            </a>
            <a
              href="#about"
              className="text-white hover:text-red-100 transition duration-300 nav-link-underline"
              onClick={(e) => scrollToSection(e, "#about")}
            >
              Tentang Kami
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="/login"
              className="px-4 py-2 rounded hover:bg-white hover:text-red-700 transition duration-300 border border-white text-white"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              Masuk
            </a>
            <a
              href="/register"
              className="px-4 py-2 bg-white text-red-700 rounded hover:bg-red-100 transition duration-300 hover-translate"
              onClick={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
            >
              Daftar
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-white"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="bg-gradient-red md:hidden pb-4">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <a
                href="#features"
                className="block py-2 hover:bg-red-800 px-3 rounded text-white"
                onClick={(e) => scrollToSection(e, "#features")}
              >
                Fitur
              </a>
              <a
                href="#how-it-works"
                className="block py-2 hover:bg-red-800 px-3 rounded text-white"
                onClick={(e) => scrollToSection(e, "#how-it-works")}
              >
                Cara Kerja
              </a>
              <a
                href="#about"
                className="block py-2 hover:bg-red-800 px-3 rounded text-white"
                onClick={(e) => scrollToSection(e, "#about")}
              >
                Tentang Kami
              </a>
              <div className="flex flex-col space-y-2 pt-2 border-t border-red-700">
                <a
                  href="/login"
                  className="py-2 text-center rounded border border-white text-white hover:bg-white hover:text-red-700 transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/login");
                  }}
                >
                  Masuk
                </a>
                <a
                  href="/register"
                  className="py-2 text-center bg-white text-red-700 rounded hover:bg-red-100 transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/register");
                  }}
                >
                  Daftar
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-red text-white pt-32 pb-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div
            className="md:w-1/2 mb-10 md:mb-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-red-200 text-red-800 font-semibold text-sm mb-6 scale-in-center">
              Platform Analisis Film #1 di Indonesia
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Prediksi Risiko Investasi Film Dengan Data, Bukan Feeling
            </h1>
            <p className="text-lg mb-8 text-red-100">
              "Bro, film ini bakal cuan gak sih? Worth gak kalau duit gue yang
              segunung ini dimasukin buat project ini?" Tenang bro, kita
              jawabnya pake data, bukan feeling.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="register.html"
                className="bg-white text-red-700 px-6 py-3 rounded font-bold hover:bg-red-100 transition duration-300 text-center hover-translate shadow-lg"
              >
                Mulai Sekarang
              </a>
              <a
                href="#demo"
                className="border border-white px-6 py-3 rounded font-bold hover:bg-white hover:text-red-700 transition duration-300 flex items-center justify-center hover-translate"
              >
                <i className="fas fa-play-circle mr-2"></i> Lihat Demo
              </a>
            </div>
          </div>
          <div
            className="md:w-1/2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src="/api/placeholder/600/400"
              alt="Film Investment Analytics Dashboard"
              className="rounded-lg shadow-2xl animate-float"
            />
          </div>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-3">
              Fitur Unggulan
            </span>
            <h2 className="text-3xl font-bold text-gray-800">
              Keunggulan Platform Kami
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
              className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white hover-translate group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-red-100 p-5 rounded-full mb-6 group-hover:bg-red-600 transition duration-300">
                <i className="fas fa-chart-line text-red-600 text-3xl group-hover:text-white transition duration-300"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Prediksi Pendapatan
              </h3>
              <p className="text-gray-600">
                Machine learning kami memprediksi pendapatan film berdasarkan
                faktor-faktor kunci dengan model regresi canggih.
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white hover-translate group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-red-100 p-5 rounded-full mb-6 group-hover:bg-red-600 transition duration-300">
                <i className="fas fa-shield-alt text-red-600 text-3xl group-hover:text-white transition duration-300"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Klasifikasi Risiko
              </h3>
              <p className="text-gray-600">
                Algoritma kami mengklasifikasikan film ke dalam kategori risiko
                tinggi, sedang, atau rendah untuk membantu keputusan investasi.
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white hover-translate group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-red-100 p-5 rounded-full mb-6 group-hover:bg-red-600 transition duration-300">
                <i className="fas fa-tachometer-alt text-red-600 text-3xl group-hover:text-white transition duration-300"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Dashboard Analitik
              </h3>
              <p className="text-gray-600">
                Visualisasi data interaktif memudahkan analisis dan perbandingan
                performa film-film yang berbeda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- How It Works --> */}
      <section id="how-it-works" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-3">
              Proses Kerja
            </span>
            <h2 className="text-3xl font-bold text-gray-800">
              Bagaimana Ini Bekerja
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div
              className="md:w-1/2 mb-10 md:mb-0"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src="/api/placeholder/500/350"
                alt="How It Works Illustration"
                className="rounded shadow-xl mx-auto animate-pulse-slow"
              />
            </div>
            <div
              className="md:w-1/2 md:pl-10"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="flex items-start mb-8 hover-translate">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Daftar & Login
                  </h3>
                  <p className="text-gray-600">
                    Buat akun dan masuk ke dashboard FilmRisk dengan cepat dan
                    aman.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-8 hover-translate">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Masukkan Data Film
                  </h3>
                  <p className="text-gray-600">
                    Masukkan informasi tentang film yang ingin dianalisis,
                    termasuk anggaran, genre, dll.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-8 hover-translate">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Dapatkan Prediksi
                  </h3>
                  <p className="text-gray-600">
                    Model ML kami menganalisis data dan memberikan prediksi
                    pendapatan serta tingkat risiko.
                  </p>
                </div>
              </div>
              <div className="flex items-start hover-translate">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Analisis & Putuskan
                  </h3>
                  <p className="text-gray-600">
                    Gunakan hasil analisis untuk membuat keputusan investasi
                    yang lebih baik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials --> */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-3">
              Testimonial
            </span>
            <h2 className="text-3xl font-bold text-gray-800">
              Kata Mereka Tentang Kami
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition duration-300 hover-translate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative mb-6">
                <i className="fas fa-quote-left text-4xl text-red-200 absolute -top-4 -left-2"></i>
              </div>
              <p className="text-gray-600 mb-6">
                "FilmRisk membantu saya menghindari kerugian pada investasi film
                terakhir saya. Prediksinya akurat dan membantu saya memutuskan
                dengan lebih yakin."
              </p>
              <div className="flex items-center">
                <img
                  src="/api/placeholder/60/60"
                  alt="User"
                  className="rounded-full w-12 h-12 mr-4 border-2 border-red-500"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Andi Wijaya</h4>
                  <p className="text-sm text-gray-500">Produser Film</p>
                </div>
                <div className="ml-auto flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div
              className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition duration-300 hover-translate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative mb-6">
                <i className="fas fa-quote-left text-4xl text-red-200 absolute -top-4 -left-2"></i>
              </div>
              <p className="text-gray-600 mb-6">
                "Dashboardnya intuitif dan mudah dipahami. Saya sangat terbantu
                dengan kategorisasi risiko yang jelas. Rekomendasi buat semua
                investor film!"
              </p>
              <div className="flex items-center">
                <img
                  src="/api/placeholder/60/60"
                  alt="User"
                  className="rounded-full w-12 h-12 mr-4 border-2 border-red-500"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Siti Rahayu</h4>
                  <p className="text-sm text-gray-500">Investor</p>
                </div>
                <div className="ml-auto flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <div
              className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition duration-300 hover-translate"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="relative mb-6">
                <i className="fas fa-quote-left text-4xl text-red-200 absolute -top-4 -left-2"></i>
              </div>
              <p className="text-gray-600 mb-6">
                "FilmRisk membantu studio kami menghemat jutaan rupiah dalam
                setahun dengan membantu mengidentifikasi proyek-proyek berisiko
                tinggi sejak awal."
              </p>
              <div className="flex items-center">
                <img
                  src="/api/placeholder/60/60"
                  alt="User"
                  className="rounded-full w-12 h-12 mr-4 border-2 border-red-500"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Budi Santoso</h4>
                  <p className="text-sm text-gray-500">Studio Executive</p>
                </div>
                <div className="ml-auto flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA Section --> */}
      <section className="py-16 bg-gradient-red-light text-white">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="text-3xl font-bold mb-6">
              Siap untuk investasi film dengan lebih cerdas?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Daftar sekarang dan mulai gunakan alat prediksi risiko kami untuk
              membuat keputusan investasi film berbasis data.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="register.html"
                className="bg-white text-red-700 px-8 py-3 rounded-lg font-bold hover:bg-red-100 transition duration-300 hover-translate shadow-lg"
              >
                Daftar Gratis
              </a>
              <a
                href="#contact"
                className="border border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-700 transition duration-300 hover-translate"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center space-x-2 mb-6">
                <i className="fas fa-film text-2xl text-red-500"></i>
                <span className="font-bold text-xl">FilmRisk</span>
              </div>
              <p className="text-gray-400">
                Platform prediksi risiko investasi film berbasis AI dan machine
                learning.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="font-bold text-lg mb-6 text-red-400">Navigasi</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-400 transition duration-300"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-red-400 transition duration-300"
                  >
                    Fitur
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 hover:text-red-400 transition duration-300"
                  >
                    Cara Kerja
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-red-400 transition duration-300"
                  >
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="font-bold text-lg mb-6 text-red-400">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-400 transition duration-300"
                  >
                    Syarat & Ketentuan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-400 transition duration-300"
                  >
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-400 transition duration-300"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div id="contact" data-aos="fade-up" data-aos-delay="400">
              <h3 className="font-bold text-lg mb-6 text-red-400">Kontak</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-red-500"></i>
                  <a
                    href="mailto:info@filmrisk.id"
                    className="text-gray-400 hover:text-red-400 transition duration-300"
                  >
                    info@filmrisk.id
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-3 text-red-500"></i>
                  <a
                    href="tel:+6281234567890"
                    className="text-gray-400 hover:text-red-400 transition duration-300"
                  >
                    +62 812-3456-7890
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-3 text-red-500"></i>
                  <span className="text-gray-400">Jakarta, Indonesia</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FilmRisk. Semua Hak Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
