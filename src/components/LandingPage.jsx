import React, { useEffect, useState } from 'react'
import { Compass, Target, Zap, Clock, Award, CheckCircle, Mail, Shield } from 'lucide-react'

const LandingPage = () => {
  const [visibleElements, setVisibleElements] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    const elements = document.querySelectorAll('[id^="animate-"]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleGetEarlyAccess = () => {
    // You can implement your early access logic here
    // For now, we'll just scroll to the contact section
    document.getElementById('cta-section').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C4869C] via-[#D4A1B1] to-[#C4869C]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div 
            id="animate-hero-logo" 
            className={`fade-in ${visibleElements.has('animate-hero-logo') ? 'visible' : ''} mb-8`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-[#8B3A5C] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl">🐒</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#8B3A5C] ml-4">
                Pookie
              </h1>
            </div>
          </div>
          
          <div 
            id="animate-hero-headline" 
            className={`fade-in-delayed ${visibleElements.has('animate-hero-headline') ? 'visible' : ''} mb-6`}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Discover Your Best-Fit Career – 
              <span className="text-[#8B3A5C]"> Faster</span>
            </h2>
          </div>
          
          <div 
            id="animate-hero-subheadline" 
            className={`fade-in-delayed-more ${visibleElements.has('animate-hero-subheadline') ? 'visible' : ''} mb-8`}
          >
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Find your ideal study and job opportunities in weeks, not years.
            </p>
          </div>
          
          <div 
            id="animate-hero-cta" 
            className={`fade-in-delayed-more ${visibleElements.has('animate-hero-cta') ? 'visible' : ''} mb-12`}
          >
            <button 
              onClick={handleGetEarlyAccess}
              className="bg-[#8B3A5C] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#7A2F4F] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Early Access
            </button>
          </div>
          
          <div 
            id="animate-hero-illustration" 
            className={`fade-in-delayed-more ${visibleElements.has('animate-hero-illustration') ? 'visible' : ''}`}
          >
            <div className="flex justify-center items-center space-x-8 text-[#8B3A5C]">
              <Compass size={48} className="animate-pulse" />
              <Target size={48} className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Zap size={48} className="animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="animate-how-it-works-title" 
            className={`fade-in ${visibleElements.has('animate-how-it-works-title') ? 'visible' : ''} text-center mb-16`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to discover your perfect career path
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              id="animate-step-1" 
              className={`fade-in ${visibleElements.has('animate-step-1') ? 'visible' : ''} text-center p-8 rounded-lg bg-gradient-to-b from-[#F5E6EB] to-white shadow-lg`}
            >
              <div className="w-16 h-16 bg-[#8B3A5C] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Take Quick Tests</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete assessments covering your interests, personality, skills, work values, and work styles. Quick and comprehensive.
              </p>
            </div>
            
            <div 
              id="animate-step-2" 
              className={`fade-in-delayed ${visibleElements.has('animate-step-2') ? 'visible' : ''} text-center p-8 rounded-lg bg-gradient-to-b from-[#F5E6EB] to-white shadow-lg`}
            >
              <div className="w-16 h-16 bg-[#8B3A5C] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Matched Instantly</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive personalized job and industry matches based on real benchmarks and requirements. No guesswork involved.
              </p>
            </div>
            
            <div 
              id="animate-step-3" 
              className={`fade-in-delayed-more ${visibleElements.has('animate-step-3') ? 'visible' : ''} text-center p-8 rounded-lg bg-gradient-to-b from-[#F5E6EB] to-white shadow-lg`}
            >
              <div className="w-16 h-16 bg-[#8B3A5C] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Explore Your Path</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover personalized study and career pathways tailored to your profile. Start your journey with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#C4869C] via-[#D4A1B1] to-[#C4869C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="animate-why-choose-title" 
            className={`fade-in ${visibleElements.has('animate-why-choose-title') ? 'visible' : ''} text-center mb-16`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Pookie?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We're revolutionizing career discovery with data-driven insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              id="animate-feature-1" 
              className={`fade-in ${visibleElements.has('animate-feature-1') ? 'visible' : ''} text-center p-8 rounded-lg bg-white/90 shadow-lg`}
            >
              <Target className="w-16 h-16 text-[#8B3A5C] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalized Recommendations</h3>
              <p className="text-gray-600 leading-relaxed">
                Get tailored career suggestions based on your unique profile and data, not generic advice.
              </p>
            </div>
            
            <div 
              id="animate-feature-2" 
              className={`fade-in-delayed ${visibleElements.has('animate-feature-2') ? 'visible' : ''} text-center p-8 rounded-lg bg-white/90 shadow-lg`}
            >
              <Clock className="w-16 h-16 text-[#8B3A5C] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Weeks, Not Years</h3>
              <p className="text-gray-600 leading-relaxed">
                Reduce years of trial and error to weeks of focused exploration and discovery.
              </p>
            </div>
            
            <div 
              id="animate-feature-3" 
              className={`fade-in-delayed-more ${visibleElements.has('animate-feature-3') ? 'visible' : ''} text-center p-8 rounded-lg bg-white/90 shadow-lg`}
            >
              <Award className="w-16 h-16 text-[#8B3A5C] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Real Benchmarks</h3>
              <p className="text-gray-600 leading-relaxed">
                Matched against actual job and industry requirements, ensuring realistic and achievable paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            id="animate-cta-title" 
            className={`fade-in ${visibleElements.has('animate-cta-title') ? 'visible' : ''} mb-8`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Start Discovering Your Path Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sign up for early access and be among the first to experience personalized career guidance.
            </p>
          </div>
          
          <div 
            id="animate-cta-form" 
            className={`fade-in-delayed ${visibleElements.has('animate-cta-form') ? 'visible' : ''} max-w-md mx-auto mb-8`}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B3A5C] focus:border-transparent"
              />
              <button className="bg-[#8B3A5C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7A2F4F] transition-colors shadow-lg hover:shadow-xl">
                Get Early Access
              </button>
            </div>
          </div>
          
          <div 
            id="animate-cta-benefits" 
            className={`fade-in-delayed-more ${visibleElements.has('animate-cta-benefits') ? 'visible' : ''} flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#8B3A5C]" />
              <span>Free early access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#8B3A5C]" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#8B3A5C]" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-12 h-12 bg-[#8B3A5C] rounded-full flex items-center justify-center mr-3">
                <span className="text-2xl">🐒</span>
              </div>
              <span className="text-2xl font-bold">Pookie</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-center md:text-left">
              <a href="#privacy" className="hover:text-[#C4869C] transition-colors flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Privacy Policy
              </a>
              <a href="#contact" className="hover:text-[#C4869C] transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pookie. All rights reserved. Discover your career path faster.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage