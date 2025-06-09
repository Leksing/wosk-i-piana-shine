import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Mail, Clock, Car, Sparkles, Shield, Award, Wrench, Droplets } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const expressServices = [
    {
      name: "Mycie express",
      time: "do 15 minut",
      price: "45zł"
    },
    {
      name: "Wnętrze express", 
      time: "do 15 minut",
      price: "55zł"
    },
    {
      name: "Komplet express",
      time: "do 30 minut", 
      price: "100zł"
    }
  ];

  const standardServices = [
    {
      name: "Mycie ręczne",
      price: "60zł"
    },
    {
      name: "Czyszczenie i odkurzanie",
      price: "70zł"
    },
    {
      name: "Komplet",
      price: "130zł"
    },
    {
      name: "Mycie detailingowe QD+",
      price: "180zł"
    },
    {
      name: "Komplet DETAL QD+",
      price: "280zł"
    },
    {
      name: "Woskowanie opon",
      price: "30zł"
    },
    {
      name: "Ozonowanie wnętrza",
      price: "50zł"
    },
    {
      name: "Czyszczenie wnętrza parą",
      price: "70zł"
    },
    {
      name: "Pakiet antybakteryjny (ozon+para)",
      price: "120zł"
    }
  ];

  const correctionServices = [
    {
      name: "Jednoetapowa ONESTEP",
      price: "800-1300zł"
    },
    {
      name: "Dwuetapowa",
      price: "1200-1500zł"
    },
    {
      name: "Pełna korekta",
      price: "1500-2000zł"
    },
    {
      name: "Dekontaminacja",
      price: "250-500zł"
    }
  ];

  const coatingServices = [
    {
      name: "Ceramiczna (36msc/50kkm)",
      price: "1200-1800zł"
    },
    {
      name: "Kwarcowa (18msc/25kkm)",
      price: "800-1200zł"
    },
    {
      name: "Powłoka felg",
      price: "100-400zł"
    },
    {
      name: "Serwis powłoki",
      price: "250-350zł"
    }
  ];

  const galleryImages = [
    {
      src: "/lovable-uploads/de7ec928-e46e-459c-81fa-aa6aa4841156.png",
      title: "Mercedes AMG - Efekt po detailingu",
      category: "Mycie Premium"
    },
    {
      src: "/lovable-uploads/802f05ad-74dd-44f2-bfd9-cc1a9d5e1750.png", 
      title: "BMW - Felgi po renowacji",
      category: "Czyszczenie felg"
    },
    {
      src: "/lovable-uploads/12252aaf-8db4-4067-9798-d2ae582e1ea3.png",
      title: "BMW - Wnętrze po czyszczeniu",
      category: "Czyszczenie wnętrz"
    },
    {
      src: "/lovable-uploads/b1098b82-e853-446e-b74d-fd829173ebd2.png",
      title: "Mercedes - Wnętrze premium",
      category: "Detailing wnętrz"
    },
    {
      src: "/lovable-uploads/37617ae5-fe88-4ada-bea4-d022687eaaa1.png",
      title: "Mercedes S-Class - Mycie profesjonalne",
      category: "Mycie detailingowe"
    },
    {
      src: "/lovable-uploads/a3bf2082-870c-49a6-8d43-b9e6c76a02c3.png",
      title: "Mercedes CLS - Lustrzany połysk",
      category: "Korekta lakieru"
    },
    {
      src: "/lovable-uploads/cefbbfef-8da7-437e-aad8-246e6c881f78.png",
      title: "Volkswagen - Proces mycia",
      category: "Mycie ręczne"
    },
    {
      src: "/lovable-uploads/9fbed2ba-3329-49f7-8ac1-3fbab775deaa.png",
      title: "Ford Mustang - Efekt końcowy",
      category: "Korekta lakieru"
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* WiP Logo with detailing icons */}
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-[#C7672D] tracking-[1px] mb-1">WiP</div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 text-[#C7672D]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="w-6 h-6 text-[#C7672D]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#2C2C2C] tracking-[2px]">WOSK I PIANA</span>
                <p className="text-sm text-[#6C6C6C]">Myjnia samochodowa | Korekty | Powłoki</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('uslugi')}
                className="text-[#6C6C6C] hover:text-[#C7672D] transition-colors font-bold"
              >
                Usługi
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-[#6C6C6C] hover:text-[#C7672D] transition-colors font-bold"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('o-nas')}
                className="text-[#6C6C6C] hover:text-[#C7672D] transition-colors font-bold"
              >
                O nas
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="text-[#6C6C6C] hover:text-[#C7672D] transition-colors font-bold"
              >
                Kontakt
              </button>
              <div className="flex items-center space-x-2 text-[#6C6C6C]">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-bold">58 683 47 22</span>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="bg-[#C7672D] hover:bg-[#A85524] text-white font-bold px-6 py-3 rounded-lg"
            >
              Umów wizytę
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 bg-[#2C2C2C]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-[#C7672D]/20 text-[#C7672D] border-[#C7672D]/30 px-4 py-2 text-sm font-bold">
              Profesjonalna myjnia w Pruszczu Gdańskim
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.2]">
              ZABEZPIECZ SWOJE AUTO
              <br />
              <span className="text-[#C7672D]">PRZED JESIENIĄ I ZIMĄ</span>
            </h1>
            <p className="text-lg text-[#F8F9FA] mb-8 leading-[1.6] max-w-2xl">
              Specjalizujemy się w detailingu samochodowym najwyższej jakości. 
              Mycie, korekty lakieru i powłoki ochronne wykonywane przez doświadczonych profesjonalistów.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('uslugi')}
                className="bg-[#C7672D] hover:bg-[#A85524] text-white font-bold px-6 py-3 rounded-lg text-base"
              >
                Sprawdź usługi
              </Button>
              <Button 
                onClick={() => scrollToSection('galeria')}
                variant="outline" 
                className="border-2 border-[#C7672D] text-[#C7672D] hover:bg-[#C7672D] hover:text-white font-bold px-6 py-3 rounded-lg text-base"
              >
                Zobacz galerię
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4 leading-[1.2]">Nasze Usługi</h2>
            <p className="text-lg text-[#6C6C6C] max-w-2xl mx-auto leading-[1.6]">
              Oferujemy kompleksowe usługi pielęgnacji pojazdów z wykorzystaniem najlepszych produktów i technologii
            </p>
          </div>

          {/* Express Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-8 text-center">USŁUGI EXPRESS</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {expressServices.map((service, index) => (
                <Card key={index} className="bg-white border border-[#D4885C] rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Droplets className="h-12 w-12 text-[#C7672D] mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-[#2C2C2C] mb-2">{service.name}</h4>
                    <p className="text-sm text-[#6C6C6C] mb-4">{service.time}</p>
                    <div className="text-2xl font-bold text-[#C7672D]">{service.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Standard Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-8 text-center">USŁUGI STANDARDOWE</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {standardServices.map((service, index) => (
                <Card key={index} className="bg-white border border-[#D4885C] rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Car className="h-12 w-12 text-[#C7672D] mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-[#2C2C2C] mb-4">{service.name}</h4>
                    <div className="text-xl font-bold text-[#C7672D]">{service.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Correction Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-8 text-center">KOREKTY LAKIERU</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {correctionServices.map((service, index) => (
                <Card key={index} className="bg-white border border-[#D4885C] rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Sparkles className="h-12 w-12 text-[#C7672D] mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-[#2C2C2C] mb-4">{service.name}</h4>
                    <div className="text-xl font-bold text-[#C7672D]">{service.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coating Services */}
          <div>
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-8 text-center">POWŁOKI OCHRONNE</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {coatingServices.map((service, index) => (
                <Card key={index} className="bg-white border border-[#D4885C] rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 text-[#C7672D] mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-[#2C2C2C] mb-4">{service.name}</h4>
                    <div className="text-xl font-bold text-[#C7672D]">{service.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4 leading-[1.2]">Galeria Naszych Prac</h2>
            <p className="text-lg text-[#6C6C6C] max-w-2xl mx-auto leading-[1.6]">
              Zobacz efekty naszej pracy z autentycznymi zdjęciami z myjni
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((item, index) => (
              <Card key={index} className="bg-white border border-[#D4885C] rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-[#2C2C2C] mb-2">{item.title}</h4>
                    <Badge className="bg-[#C7672D]/10 text-[#C7672D] border-[#C7672D]/20 px-2 py-1 text-xs font-bold">
                      {item.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6 leading-[1.2]">Dlaczego Wosk i Piana?</h2>
              <p className="text-lg text-[#6C6C6C] mb-8 leading-[1.6]">
                Z pasją zajmujemy się detailingiem samochodowym od wielu lat. Nasze doświadczenie, 
                połączone z użyciem najlepszych produktów na rynku, gwarantuje spektakularne efekty.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Award className="h-6 w-6 text-[#C7672D]" />
                  <span className="text-[#6C6C6C] text-base font-normal">Ponad 10 lat doświadczenia</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Star className="h-6 w-6 text-[#C7672D]" />
                  <span className="text-[#6C6C6C] text-base font-normal">Wyłącznie premium produkty</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Shield className="h-6 w-6 text-[#C7672D]" />
                  <span className="text-[#6C6C6C] text-base font-normal">Gwarancja satysfakcji</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-[#C7672D] border-none rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
                <CardContent className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4 leading-[1.2]">Nasza Misja</h3>
                  <p className="text-lg leading-[1.6] font-normal">
                    Chcemy, aby każdy samochód, który opuszcza naszą myjnię, wyglądał lepiej niż w dniu zakupu. 
                    Dbamy o każdy detal, bo wiemy, że to one czynią różnicę.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4 leading-[1.2]">Kontakt</h2>
            <p className="text-lg text-[#6C6C6C]">Skontaktuj się z nami i umów wizytę w Pruszczu Gdańskim</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#C7672D] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Adres</h3>
                  <p className="text-[#6C6C6C] leading-[1.6] font-normal">Obrońców Pokoju 30a<br />83-000 Pruszcz Gdański</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#C7672D] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Telefon</h3>
                  <p className="text-[#6C6C6C] font-normal">58 683 47 22</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#C7672D] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Social Media</h3>
                  <p className="text-[#6C6C6C] font-normal">@woskipiana</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-[#C7672D] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Godziny otwarcia</h3>
                  <p className="text-[#6C6C6C] leading-[1.6] font-normal">
                    Pon-Pt: 8:00 - 18:00<br />
                    Sob: 9:00 - 15:00<br />
                    Ndz: Zamknięte
                  </p>
                </div>
              </div>
            </div>
            <Card className="bg-white border border-[#D4885C] rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-6 leading-[1.2]">Umów wizytę</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-[#2C2C2C] mb-2 font-bold">Imię i nazwisko</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-white border border-[#D4885C] rounded-lg text-[#2C2C2C] focus:border-[#C7672D] focus:outline-none font-normal"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2C2C2C] mb-2 font-bold">Telefon</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 bg-white border border-[#D4885C] rounded-lg text-[#2C2C2C] focus:border-[#C7672D] focus:outline-none font-normal"
                      placeholder="58 683 47 22"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2C2C2C] mb-2 font-bold">Rodzaj usługi</label>
                    <select className="w-full p-3 bg-white border border-[#D4885C] rounded-lg text-[#2C2C2C] focus:border-[#C7672D] focus:outline-none font-normal">
                      <option>Mycie Premium</option>
                      <option>Korekta lakieru</option>
                      <option>Powłoki ochronne</option>
                      <option>Usługi express</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#2C2C2C] mb-2 font-bold">Wiadomość</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 bg-white border border-[#D4885C] rounded-lg text-[#2C2C2C] focus:border-[#C7672D] focus:outline-none font-normal"
                      placeholder="Dodatkowe informacje..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#C7672D] hover:bg-[#A85524] text-white font-bold py-3 rounded-lg">
                    Wyślij zapytanie
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-[#C7672D] tracking-[1px] mb-1">WiP</div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 text-[#C7672D]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="w-4 h-4 text-[#C7672D]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-[2px]">WOSK I PIANA</span>
                <p className="text-sm text-[#6C6C6C] font-normal">Myjnia samochodowa | Korekty | Powłoki</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[#6C6C6C] leading-[1.6] font-normal mb-2">
                © 2024 Wosk i Piana. Wszystkie prawa zastrzeżone.<br />
                Profesjonalna myjnia samochodowa w Pruszczu Gdańskim
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 text-[#C7672D]">
                <span className="text-sm font-bold">@woskipiana</span>
                <span className="text-sm font-bold">58 683 47 22</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
