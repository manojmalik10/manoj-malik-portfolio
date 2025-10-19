export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Manoj Malik
        </h1>
        <p className="text-2xl mt-4 text-gray-300">
          Full Stack Developer & National Level Wrestler
        </p>
        <p className="text-xl mt-2 text-gray-400 max-w-2xl mx-auto">
          Combining athletic discipline with technical expertise to build amazing web applications
        </p>
        <div className="mt-8">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-all">
            View My Work
          </a>
        </div>
      </section>

      {/* Skills & Achievements Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Achievements</h2>
        
        {/* Wrestling Achievement */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 p-6 rounded-lg text-center mb-12">
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl">🏆</span>
            <div>
              <h3 className="text-2xl font-bold text-white">National Level Wrestler</h3>
              <p className="text-white mt-2">Competed at national level wrestling competitions</p>
            </div>
            <span className="text-4xl">💪</span>
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          
          {/* Frontend & Backend */}
          <div className="bg-blue-500 p-4 rounded text-center font-semibold">React</div>
          <div className="bg-green-500 p-4 rounded text-center font-semibold">Node.js</div>
          <div className="bg-blue-600 p-4 rounded text-center font-semibold">Java</div>
          <div className="bg-yellow-500 p-4 rounded text-center font-semibold">JavaScript</div>
          
          {/* Web Technologies */}
          <div className="bg-green-600 p-4 rounded text-center font-semibold">DSA</div>
          <div className="bg-orange-500 p-4 rounded text-center font-semibold">HTML5</div>
          <div className="bg-blue-400 p-4 rounded text-center font-semibold">CSS3</div>
          <div className="bg-teal-500 p-4 rounded text-center font-semibold">Django</div>
          
          {/* Databases */}
          <div className="bg-purple-600 p-4 rounded text-center font-semibold">MySQL</div>
          <div className="bg-green-700 p-4 rounded text-center font-semibold">MongoDB</div>
          <div className="bg-blue-700 p-4 rounded text-center font-semibold">SQL</div>
          <div className="bg-gray-600 p-4 rounded text-center font-semibold">System Design</div>
          
          {/* DevOps & Tools */}
          <div className="bg-blue-800 p-4 rounded text-center font-semibold">Docker</div>
          <div className="bg-indigo-600 p-4 rounded text-center font-semibold">Kubernetes</div>
          <div className="bg-yellow-600 p-4 rounded text-center font-semibold">CI/CD</div>
          <div className="bg-gray-800 p-4 rounded text-center font-semibold">Git & GitHub</div>

          {/* Additional Tools */}
          <div className="bg-indigo-500 p-4 rounded text-center font-semibold">VS Code</div>
          <div className="bg-pink-600 p-4 rounded text-center font-semibold">Tailwind CSS</div>
          <div className="bg-purple-500 p-4 rounded text-center font-semibold">OpenAI API</div>
          <div className="bg-red-600 p-4 rounded text-center font-semibold">Express.js</div>

        </div>

        {/* Skills Categories */}
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Frontend */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-lg font-bold text-blue-400 mb-3 text-center">Frontend</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-blue-500 px-3 py-1 rounded text-sm">React</span>
              <span className="bg-yellow-500 px-3 py-1 rounded text-sm">JavaScript</span>
              <span className="bg-orange-500 px-3 py-1 rounded text-sm">HTML5</span>
              <span className="bg-blue-400 px-3 py-1 rounded text-sm">CSS3</span>
              <span className="bg-pink-600 px-3 py-1 rounded text-sm">Tailwind</span>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-lg font-bold text-green-400 mb-3 text-center">Backend</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-green-500 px-3 py-1 rounded text-sm">Node.js</span>
              <span className="bg-red-600 px-3 py-1 rounded text-sm">Express.js</span>
              <span className="bg-blue-600 px-3 py-1 rounded text-sm">Java</span>
              <span className="bg-teal-500 px-3 py-1 rounded text-sm">Django</span>
            </div>
          </div>

          {/* DevOps */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-lg font-bold text-purple-400 mb-3 text-center">DevOps & Tools</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-blue-800 px-3 py-1 rounded text-sm">Docker</span>
              <span className="bg-indigo-600 px-3 py-1 rounded text-sm">Kubernetes</span>
              <span className="bg-yellow-600 px-3 py-1 rounded text-sm">CI/CD</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">Git</span>
              <span className="bg-indigo-500 px-3 py-1 rounded text-sm">VS Code</span>
            </div>
          </div>

        </div>

        {/* Certifications */}
        <div className="max-w-2xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <span className="text-blue-400 text-lg font-semibold">📚 Web Development</span>
              <p className="text-gray-300">Udemy</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <span className="text-green-400 text-lg font-semibold">⚡ DSA + Java</span>
              <p className="text-gray-300">Udemy</p>
            </div>
          </div>
        </div>

        {/* Skills Description */}
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-gray-400 italic">
            &quot;Combining the discipline of a national level wrestler with full-stack development expertise including modern DevOps practices&quot;
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SigmaGPT Project */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-400">SigmaGPT</h3>
            <p className="text-gray-300 mt-2">Full Stack AI Chatbot with OpenAI API</p>
            <div className="mt-4 flex gap-4">
              <a href="https://your-sigmagpt-demo.netlify.app" target="_blank" rel="noopener noreferrer" 
                 className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-all">
                Live Demo
              </a>
              <a href="https://github.com/manojmalik10/MY-sigmagpt-Main" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition-all">
                GitHub
              </a>
            </div>
          </div>

          {/* Zerodha Clone Project */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-400">Zerodha Clone</h3>
            <p className="text-gray-300 mt-2">Trading Platform UI Clone</p>
            <div className="mt-4 flex gap-4">
              <a href="https://your-zerodha-demo.netlify.app" target="_blank" rel="noopener noreferrer"
                 className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-all">
                Live Demo
              </a>
              <a href="https://github.com/manojmalik10/My_zerodha_clone_" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition-all">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* KIIT University */}
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">🎓</span>
            </div>
            <h3 className="text-xl font-bold text-white">KIIT University</h3>
            <p className="text-gray-300 mt-2">B.Tech CSE</p>
            <p className="text-gray-400 text-sm">2022-2026</p>
            <div className="mt-4 bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm">
              CGPA: 6.9/10
            </div>
          </div>

          {/* 12th Class */}
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">📚</span>
            </div>
            <h3 className="text-xl font-bold text-white">12th Grade</h3>
            <p className="text-gray-300 mt-2">Science Stream</p>
            <p className="text-gray-400 text-sm">2022</p>
            <div className="mt-4 bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">
              Score: 81%
            </div>
          </div>

          {/* 10th Class */}
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">🏫</span>
            </div>
            <h3 className="text-xl font-bold text-white">10th Grade</h3>
            <p className="text-gray-300 mt-2">CBSE/State Board</p>
            <p className="text-gray-400 text-sm">2020</p>
            <div className="mt-4 bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm">
              Score: 56%
            </div>
          </div>

        </div>

        {/* Positive Note */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-gray-400 italic">
            &quot;Consistent growth in academic journey with focus on practical skills and project development&quot;
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>
        
        <div className="max-w-4xl mx-auto">
          
          {/* National Level Achievement */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-lg text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏆</span>
            </div>
            <h3 className="text-2xl font-bold text-white">National Level Representation</h3>
            <p className="text-white text-lg mt-2">Represented School at National Level Competition</p>
            <p className="text-white mt-4 text-sm opacity-90">
              Selected among top students to represent school in national-level event, 
              showcasing leadership and exceptional skills
            </p>
          </div>

          {/* Supporting Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            
            {/* Academic Growth */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-green-400">Academic Growth</h4>
              <p className="text-gray-300 mt-2">Consistent improvement from 10th to Engineering</p>
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-blue-300">10th: 56%</span>
                <span className="text-green-300">12th: 81%</span>
                <span className="text-purple-300">BTech: 6.9 CGPA</span>
              </div>
            </div>

            {/* Technical Projects */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-blue-400">Technical Excellence</h4>
              <p className="text-gray-300 mt-2">Built multiple full-stack projects with modern technologies</p>
              <div className="mt-2 text-sm text-gray-400">
                React, Node.js, AI Integration, Responsive Design
              </div>
            </div>

          </div>

          {/* Quote */}
          <div className="text-center mt-8">
            <p className="text-gray-400 italic">
              &quot;From academic growth to national recognition - constantly pushing boundaries&quot;
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          
          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/manoj-malik-a317b72b4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-6 rounded-lg flex items-center justify-center gap-3 transition-all group"
            >
              <span className="text-2xl">💼</span>
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm opacity-80">Connect Professionally</div>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/manojmalik10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg flex items-center justify-center gap-3 transition-all group"
            >
              <span className="text-2xl">⚡</span>
              <div>
                <div className="font-semibold">GitHub</div>
                <div className="text-sm opacity-80">View My Projects</div>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:manojmalik87087@gmail.com" 
              className="bg-green-600 hover:bg-green-700 p-6 rounded-lg flex items-center justify-center gap-3 transition-all group"
            >
              <span className="text-2xl">📧</span>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm opacity-80">Quick Response</div>
              </div>
            </a>

          </div>

          {/* Location & Details */}
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              
              {/* Location */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div className="text-left">
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-gray-300">Jind, Haryana</div>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <div className="text-left">
                  <div className="font-semibold text-white">Status</div>
                  <div className="text-gray-300">Open for Opportunities</div>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">⏱️</span>
                <div className="text-left">
                  <div className="font-semibold text-white">Response</div>
                  <div className="text-gray-300">Within 24 Hours</div>
                </div>
              </div>

            </div>

            {/* Direct Email */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <a 
                href="mailto:manojmalik87087@gmail.com" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-all inline-block"
              >
                📧 Email: manojmalik87087@gmail.com
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center border-t border-gray-700">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">© 2024 Manoj Malik. All rights reserved.</p>
          <p className="text-gray-500 mt-2">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}