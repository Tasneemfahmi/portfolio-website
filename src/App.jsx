import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { TechStack } from '@/components/TechStack';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleResumeDownload = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Tasneem Fahmi - Engineer Beyond the Stack</title>
        <meta name="description" content="Versatile software engineer specializing in full-stack development, mobile apps, and creative solutions. Code in every dimension with Tasneem Fahmi." />
      </Helmet>
      
      <div className="min-h-screen bg-ivory">
        <Navigation />
        <Hero 
          handleContactClick={handleContactClick} 
          handleResumeDownload={handleResumeDownload} 
        />
        <About />
        <TechStack />
        <Projects handleContactClick={handleContactClick} />
        <Contact handleContactClick={handleContactClick} />
        <Footer handleContactClick={handleContactClick} />
        <Toaster />
      </div>
    </>
  );
}

export default App;