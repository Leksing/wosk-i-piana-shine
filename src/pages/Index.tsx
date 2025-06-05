
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold text-white">Wosk i Piana</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#uslugi" className="text-slate-300 hover:text-amber-400 transition-colors">Usługi</a>
              <a href="#galeria" className="text-slate-300 hover:text-amber-400 transition-colors">Galeria</a>
              <a href="#o-nas" className="text-slate-300 hover:text-amber-400 transition-colors">O nas</a>
              <a href="#kontakt" className="text-slate-300 hover:text-amber-400 transition-colors">Kontakt</a>
            </div>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
              Umów wizytę
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-amber-500/20 text-amber-400 border-amber-500/30">
              Profesjonalna myjnia w Pruszczu Gdańskim
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Perfekcyjna 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"> pielęgnacja</span> 
              Twojego auta
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Specjalizujemy się w detailingu samochodowym najwyższej jakości. 
              Mycie, korekty lakieru i powłoki ochronne wykonywane przez doświadczonych profesjonalistów.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3">
                Sprawdź usługi
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-3">
                Zobacz galerię
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nasze Usługi</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Oferujemy kompleksowe usługi pielęgnacji pojazdów z wykorzystaniem najlepszych produktów i technologii
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <service.icon className="h-16 w-16 text-amber-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="text-2xl font-bold text-amber-400 mb-4">{service.price}</div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                    Dowiedz się więcej
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Efekty Naszej Pracy</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Zobacz spektakularne efekty przed i po naszych usługach detailingowych
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 overflow-hidden hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-slate-400 text-sm mb-2">PRZED</p>
                      <p className="text-white font-medium">{item.before}</p>
                    </div>
                  </div>
                  <div className="relative h-48 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-slate-900 text-sm mb-2">PO</p>
                      <p className="text-slate-900 font-medium">{item.after}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
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
      <section id="o-nas" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Dlaczego Wosk i Piana?</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Z pasją zajmujemy się detailingiem samochodowym od wielu lat. Nasze doświadczenie, 
                połączone z użyciem najlepszych produktów na rynku, gwarantuje spektakularne efekty.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-amber-400" />
                  <span className="text-slate-300">Ponad 10 lat doświadczenia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-amber-400" />
                  <span className="text-slate-300">Wyłącznie premium produkty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-amber-400" />
                  <span className="text-slate-300">Gwarancja satysfakcji</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg p-8 text-slate-900">
                <h3 className="text-2xl font-bold mb-4">Nasza Misja</h3>
                <p className="text-lg leading-relaxed">
                  Chcemy, aby każdy samochód, który opuszcza naszą myjnię, wyglądał lepiej niż w dniu zakupu. 
                  Dbamy o każdy detal, bo wiemy, że to one czynią różnicę.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Kontakt</h2>
            <p className="text-xl text-slate-300">Skontaktuj się z nami i umów wizytę</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-amber-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Adres</h3>
                  <p className="text-slate-300">Pruszcz Gdański<br />ul. Przykładowa 123</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-amber-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Telefon</h3>
                  <p className="text-slate-300">+48 123 456 789</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-amber-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-slate-300">kontakt@woskipiana.pl</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-amber-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Godziny otwarcia</h3>
                  <p className="text-slate-300">
                    Pon-Pt: 8:00 - 18:00<br />
                    Sob: 9:00 - 15:00<br />
                    Ndz: Zamknięte
                  </p>
                </div>
              </div>
            </div>
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Umów wizytę</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-slate-300 mb-2">Imię i nazwisko</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:border-amber-400 focus:outline-none"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Telefon</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:border-amber-400 focus:outline-none"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Rodzaj usługi</label>
                    <select className="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:border-amber-400 focus:outline-none">
                      <option>Mycie Premium</option>
                      <option>Korekta lakieru</option>
                      <option>Powłoki ochronne</option>
                      <option>Kompletny detailing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Wiadomość</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:border-amber-400 focus:outline-none"
                      placeholder="Dodatkowe informacje..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3">
                    Wyślij zapytanie
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Car className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold text-white">Wosk i Piana</span>
            </div>
            <p className="text-slate-400 text-center md:text-right">
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
