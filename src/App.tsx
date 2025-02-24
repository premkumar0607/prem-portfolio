import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, BookOpen, MapPin, Calendar, Building, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="font-bold text-indigo-600 text-xl">Portfolio</span>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                ['Home', 'hero'],
                ['About', 'about'],
                ['Experience', 'experience'],
                ['Projects', 'projects'],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {label}
                </button>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdrZzpXGVtrlMVi3VqPb02Bx047_ecw60BlSqjQbq5QD0w2Gg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Contact Me
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                {[
                  ['Home', 'hero'],
                  ['About', 'about'],
                  ['Experience', 'experience'],
                  ['Projects', 'projects'],
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {label}
                  </button>
                ))}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdrZzpXGVtrlMVi3VqPb02Bx047_ecw60BlSqjQbq5QD0w2Gg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors text-center"
                >
                  Contact Me
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div id="hero" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4">Prem Kumar R</h1>
              <h2 className="text-2xl font-semibold mb-4">Data Scientist | AI & ML Enthusiast</h2>
              <p className="text-lg mb-6">
                Passionate about transforming raw data into powerful insights. Proficient in Python, data analytics, and AI model development, I excel at building machine learning models and deep learning frameworks.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/prem-kumar-2003in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  Connect With Me
                </a>
              </div>
            </div>
            <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-xl">
              <img 
                src="/prem-portfolio/images/profile.png" 
                alt="Prem Kumar R"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">About Me</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-600 mb-4">
              Passionate about Data Science, I am actively improving my analytical and coding skills through continuous learning and hands-on projects. Proficient in Python, data analytics, and AI model development, I explore innovative solutions using data-driven approaches.
            </p>
            <p className="text-gray-600">
              Currently focused on Data Science, Machine Learning, and LLM applications, I seek opportunities to apply my skills, collaborate, and grow professionally.
            </p>
          </div>

          {/* Top Skills */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Data Science', 'Machine Learning', 'Python', 'Data Analysis', 'Artificial Intelligence'].map((skill) => (
              <div key={skill} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg shadow-md text-center border border-indigo-100">
                <p className="font-semibold text-indigo-600">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Languages */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-100">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Languages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>

            {/* Libraries/Frameworks */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-100">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Libraries/Frameworks</h3>
              <ul className="space-y-2 text-gray-600">
                <li>NumPy</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
                <li>Seaborn</li>
                <li>Scikit-learn</li>
                <li>Streamlit</li>
                <li>tkinter</li>
              </ul>
            </div>

            {/* Developer Tools */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-100">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Developer Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Google Colab</li>
                <li>Jupyter Notebook</li>
                <li>VS Code</li>
                <li>Git</li>
                <li>Linux</li>
              </ul>
            </div>

            {/* Other Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-100">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Other Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Team work</li>
                <li>Problem solving</li>
                <li>Adaptability</li>
                <li>Quick learner</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg shadow-md border border-indigo-100">
              <h3 className="text-2xl font-semibold mb-2 text-indigo-600">Data Analyst Internship</h3>
              <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Building size={18} />
                  <span>Men Power Media Network (MP TV)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={18} />
                  <span>Jan 2025 - Feb 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={18} />
                  <span>Nemili, Ranipet District</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Proficient in data analysis using Google Sheets and Python libraries</li>
                <li>Skilled in data visualization using Tableau and Python libraries</li>
                <li>Created a Google Maps scraper using Beautiful Soup and tkinter</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg shadow-md border border-indigo-100">
              <h3 className="text-2xl font-semibold mb-2 text-indigo-600">Artificial Intelligence and Machine Learning Internship</h3>
              <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Building size={18} />
                  <span>Ministry of Micro, Small & Medium Enterprises (MSME)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={18} />
                  <span>Jan 2024 - Feb 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={18} />
                  <span>Guindy, Chennai</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Conducted data collection and exploratory data analysis (EDA) using Python libraries</li>
                <li>Developed and validated machine learning models using Scikit-learn</li>
                <li>Created visual reports with Matplotlib and Seaborn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Projects</h2>
          <div className="grid grid-cols-1 gap-12">
            {/* Movie Recommendation System */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-indigo-100">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="/prem-portfolio/images/01.png"
                    alt="Movie Recommendation System"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-600">Movie Recommendation System</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy'].map((tech) => (
                      <span key={tech} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                  Finding the right movie to watch can be overwhelming due to the vast number of available options. This content-based movie recommendation system suggests movies based on their similarity to a given movie using machine learning techniques. It processes movie data, extracts key features, builds a similarity matrix, and provides real-time recommendations through an interactive Streamlit interface.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
  <li>Processed movie data from TMDB using Pandas for data cleaning and preprocessing.</li>
  <li>Used Scikit-learn’s CountVectorizer to implement the Bag of Words model for feature extraction.</li>
  <li>Built a cosine similarity matrix using Scikit-learn to find similar movies.</li>
  <li>Developed an interactive web interface using Streamlit for real-time recommendations.</li>
  <li>Utilized Pickle to save and load the trained model for efficient predictions.</li>
  <li>Published methodology in IEEE conference.</li>
                  </ul>

                  <a 
                    href="https://github.com/premkumar0607/MOVIE-RECOMMENDATION-ENGINE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                  >
                    <Github size={20} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Crime Perpetrator Detection System */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-indigo-100">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="/prem-portfolio/images/02.png"
                    alt="Crime Perpetrator Detection System"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-600">Crime Perpetrator Detection System</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'OpenCV', 'deepface', 'retinaface', 'Streamlit', 'Numpy'].map((tech) => (
                      <span key={tech} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                  This AI-powered system automates suspect identification from CCTV footage and images using advanced face recognition techniques. It processes video frames and images to detect and verify faces, comparing them against a query image to find matches. The system uses DeepFace for face verification, RetinaFace for detection, OpenCV for video processing, and Streamlit for the user interface. It enables law enforcement agencies to quickly analyze surveillance data and extract relevant information for investigations.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
  <li>Captures and processes video frames using OpenCV for face detection and recognition.</li>
  <li>Extracts key frames from videos and saves them for further analysis and comparison.</li>
  <li>Uses DeepFace with RetinaFace to detect and verify faces against the query image.</li>
  <li>Stores detected matches separately in an output directory for easy review.</li>
  <li>Implements a Streamlit-based frontend for uploading and processing videos and images.</li>
  <li>Optimizes detection efficiency by adjusting confidence levels and frame extraction rates.</li>
                  </ul>

                  <a 
                    href="https://github.com/premkumar0607/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                  >
                    <Github size={20} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Real-time Hand Gesture Recognition */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-indigo-100">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="/prem-portfolio/images/03.png"
                    alt="Real-time Hand Gesture Recognition"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-600">Real-time Hand Gesture Recognition</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'OpenCV', 'MediaPipe', 'NumPy'].map((tech) => (
                      <span key={tech} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                  This real-time hand gesture recognition system allows users to control key presses using hand gestures. It leverages computer vision and machine learning techniques to track hand movements and map them to keyboard inputs. The system uses MediaPipe for hand tracking, OpenCV for video processing, and CTypes for simulating keyboard inputs.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
  <li>Captured real-time video feed using OpenCV for processing hand gestures.</li>
  <li>Implemented MediaPipe Hands to detect and track hand landmarks with high accuracy.</li>
  <li>Extracted key fingertip positions using NumPy to determine gesture patterns.</li>
  <li>Mapped detected gestures to keyboard inputs using CTypes for real-time control.</li>
  <li>Optimized performance by adjusting detection and tracking confidence levels.</li>
                  </ul>

                  <a 
                    href="https://github.com/premkumar0607/Real-time-Hand-Gesture-Recognition-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                  >
                    <Github size={20} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Education</h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg shadow-md border border-indigo-100">
              <h3 className="text-2xl font-semibold mb-2 text-indigo-600">S.A. Engineering College</h3>
              <p className="text-xl mb-2">Bachelor of Technology in Artificial Intelligence and Data Science</p>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar size={18} />
                  <span>2021 - 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={18} />
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
              <p className="text-gray-600 mt-2">CGPA: 8.71 (till 7th sem)</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg shadow-md border border-indigo-100">
              <h3 className="text-2xl font-semibold mb-2 text-indigo-600">Bharathidhasanar Matriculation Higher Secondary School</h3>
              <p className="text-xl mb-2">Higher Secondary Education (HSC & SSLC)</p>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar size={18} />
                  <span>2018 - 2021</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={18} />
                  <span>Arakkonam, Tamil Nadu</span>
                </div>
              </div>
              <p className="text-gray-600 mt-2">Class XII: 90.17% | Class X: 89.8%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <div className="flex justify-center gap-8">
              <a href="mailto:prem672003@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://github.com/premkumar0607" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/prem-kumar-2003in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://instagram.com/prem.kumar.67" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://medium.com/@prem672003" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <BookOpen size={24} />
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-gray-300">
            <p>© 2025 Prem Kumar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;