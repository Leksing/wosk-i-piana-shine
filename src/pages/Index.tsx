
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Mail, Clock, Car, Sparkles, Shield, Award } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Mycie Premium",
      description: "Kompleksowe mycie zewnętrzne i wewnętrzne z użyciem profesjonalnych produktów",
      icon: Car,
      price: "od 80 zł"
    },
    {
      title: "Korekta Lakieru",
      description: "Usuwanie rys, matowości i przywracanie głębokiego połysku lakieru",
      icon: Sparkles,
      price: "od 300 zł"
    },
    {
      title: "Powłoki Ochronne",
      description: "Ceramiczne i kwarcowe powłoki zapewniające długotrwałą ochronę",
      icon: Shield,
      price: "od 500 zł"
    }
  ];

  const gallery = [
    { before: "Matowy lakier", after: "Przywrócony blask", category: "Korekta lakieru" },
    { before: "Zabrudzone wnętrze", after: "Perfekcyjna czystość", category: "Czyszczenie wnętrz" },
    { before: "Zarysowany lakier", after: "Lustrzany połysk", category: "Polerowanie" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Car className="h-8 w-8 text-[#C7672D]" />
              <div>
                <span className="text-2xl font-bold text-[#2C2C2C] tracking-[2px]">WOSK I PIANA</span>
                <p className="text-sm text-[#6C6C6C]">Myjnia samochodowa | Korekty | Powłoki</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#uslugi" className="text-[#6C6C6C] hover:text-[#C7672D] transition-colors font-medium">Usługi</a>
              <a href="#galeria" className="text-[#6C6C6C] hover:text-[#C7672D] transition-colors font-medium">Galeria</a>
              <a href="#o-nas" className="text-[#6C6C6C] hover:text-[#C7672D] transition-colors font-medium">O nas</a>
              <a href="#kontakt" className="text-[#6C6C6C] hover:text-[#C7672D] transition-colors font-medium">Kontakt</a>
            </div>
            <Button className="bg-[#C7672D] hover:bg-[#A85524] text-white font-bold px-6 py-3 rounded-lg">
              Umów wizytę
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-[#C7672D]/10 text-[#C7672D] border-[#C7672D]/20 px-4 py-2 text-sm font-medium">
              Profesjonalna myjnia w Pruszczu Gdańskim
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-[#2C2C2C] mb-6 leading-[1.2]">
              Perfekcyjna 
              <span className="text-[#C7672D]"> pielęgnacja</span> 
              <br />Twojego auta
            </h1>
            <p className="text-lg text-[#6C6C6C] mb-8 leading-[1.6] max-w-2xl">
              Specjalizujemy się w detailingu samochodowym najwyższej jakości. 
              Mycie, korekty lakieru i powłoki ochronne wykonywane przez doświadczonych profesjonalistów.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#C7672D] hover:bg-[#A85524] text-white font-bold px-6 py-3 rounded-lg text-base">
                Sprawdź usługi
              </Button>
              <Button variant="outline" className="border-2 border-[#C7672D] text-[#C7672D] hover:bg-[#C7672D] hover:text-white font-bold px-6 py-3 rounded-lg text-base">
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
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border border-gray-200 rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-16 w-16 text-[#C7672D] mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-[#2C2C2C] mb-4 leading-[1.2]">{service.title}</h3>
                  <p className="text-base text-[#6C6C6C] mb-6 leading-[1.6]">{service.description}</p>
                  <div className="text-2xl font-bold text-[#C7672D] mb-6">{service.price}</div>
                  <Button className="w-full bg-[#C7672D] hover:bg-[#A85524] text-white font-bold py-3 rounded-lg">
                    Dowiedz się więcej
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4 leading-[1.2]">Efekty Naszej Pracy</h2>
            <p className="text-lg text-[#6C6C6C] max-w-2xl mx-auto leading-[1.6]">
              Zobacz spektakularne efekty przed i po naszych usługach detailingowych
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <Card key={index} className="bg-white border border-gray-200 rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-[#6C6C6C] to-[#2C2C2C] flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-[#F8F9FA] text-sm mb-2 font-medium">PRZED</p>
                      <p className="text-white font-semibold">{item.before}</p>
                    </div>
                  </div>
                  <div className="relative h-48 bg-gradient-to-br from-[#D4885C] to-[#C7672D] flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white text-sm mb-2 font-medium">PO</p>
                      <p className="text-white font-semibold">{item.after}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge className="bg-[#C7672D]/10 text-[#C7672D] border-[#C7672D]/20 px-3 py-1 text-sm font-medium">
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
                  <span className="text-[#6C6C6C] text-base">Ponad 10 lat doświadczenia</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Star className="h-6 w-6 text-[#C7672D]" />
                  <span className="text-[#6C6C6C] text-base">Wyłącznie premium produkty</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Shield className="h-6 w-6 text-[#C7672D]" />
                  <span className="text-[#6C6C6C] text-base">Gwarancja satysfakcji</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-[#C7672D] border-none rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
                <CardContent className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4 leading-[1.2]">Nasza Misja</h3>
                  <p className="text-lg leading-[1.6]">
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
            <p className="text-lg text-[#6C6C6C]">Skontaktuj się z nami i umów wizytę</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#C7672D] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Adres</h3>
                  <p className="text-[#6C6C6C] leading-[1.6]">Pruszcz Gdański<br />ul. Przykładowa 123</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#C7672D] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Telefon</h3>
                  <p className="text-[#6C6C6C]">+48 123 456 789</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#C7672D] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Email</h3>
                  <p className="text-[#6C6C6C]">kontakt@woskipiana.pl</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-[#C7672D] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">Godziny otwarcia</h3>
                  <p className="text-[#6C6C6C] leading-[1.6]">
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
                    <label className="block text-[#2C2C2C] mb-2 font-medium">Imię i nazwisko</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-white border border-[#D4885C] rounded-lg text-[#2C2C2C] focus:border-[#C7672D] focus:outline-none"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2C2C2C] mb-2 font-medium">Telefon</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 bg-white border border-[#D4885C] rounded-lg text-[#2C2C2C] focus:border-[#C7672D] focus:outline-none"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2C2C2C] mb-2 font-medium">Rodzaj usługi</label>
                    <select className="w-full p-3 bg-white border border-[#D4885C] rounded-lg text-[#2C2C2C] focus:border-[#C7672D] focus:outline-none">
                      <option>Mycie Premium</option>
                      <option>Korekta lakieru</option>
                      <option>Powłoki ochronne</option>
                      <option>Kompletny detailing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#2C2C2C] mb-2 font-medium">Wiadomość</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 bg-white border border-[#D4885C] rounded-lg text-[#2C2C2C] focus:border-[#C7672D] focus:outline-none"
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
              <Car className="h-8 w-8 text-[#C7672D]" />
              <div>
                <span className="text-2xl font-bold text-white tracking-[2px]">WOSK I PIANA</span>
                <p className="text-sm text-[#6C6C6C]">Myjnia samochodowa | Korekty | Powłoki</p>
              </div>
            </div>
            <p className="text-[#6C6C6C] text-center md:text-right leading-[1.6]">
              © 2024 Wosk i Piana. Wszystkie prawa zastrzeżone.<br />
              Profesjonalna myjnia samochodowa w Pruszczu Gdańskim
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
