import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero.jpeg";
import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-heading text-xl font-semibold text-foreground">
            Hun Lye
          </span>
          <div className="flex gap-4">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              About
            </a>
            <a
              href="#lineage"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Lineage
            </a>
            <a
              href="#connect"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Connect
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Dorlöp Rinpoché, Dr. Hun Lye teaching in a traditional Buddhist setting with thangka and altar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/90 via-maroon/70 to-maroon-dark/50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4 delay-100 animate-fade-up">
              Drikung Kagyu Lineage
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-semibold text-cream mb-6 leading-tight delay-200 animate-fade-up">
              Dorlöp Rinpoché
              <span className="block text-gold-light">Dr. Hun Lye</span>
            </h1>
            <p className="text-cream/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl delay-300 animate-fade-up">
              Buddhist teacher in the Drikung Kagyu Lineage, scholar, and
              founder of Urban Dharma NC. Sharing the wisdom of Tibetan Buddhism
              with clarity and compassion.
            </p>
            <div className="flex flex-wrap gap-4 delay-400 animate-fade-up">
              <Button variant="gold" size="lg" asChild>
                <a
                  href="https://udharmanc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Urban Dharma NC
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline-gold" size="lg" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
                About
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
                A Path of Wisdom & Compassion
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Dorlöp (Vajra Master) Rinpoché, Dr. Hun Lye, is an authorized
                  teacher in the Drikung Kagyu Lineage of Tibetan Buddhism,
                  renowned for its emphasis on meditation practice and the Mahamudra teachings.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a Ph.D. in Religious Studies from the University of
                  Virginia, Dr. Lye brings both deep scholarly understanding and
                  authentic practice experience to his teaching, making the
                  profound wisdom of the Tibetan Buddhist tradition accessible
                  to modern practitioners.
                </p>
              </div>

              <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Background
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Dorlöp Rinpoché</strong>{" "}
                      — Recognized Tibetan Buddhist Teacher
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Ph.D., Religious Studies</strong>{" "}
                      — University of Virginia
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Founder</strong> —
                      Urban Dharma NC
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">
                        Drikung Kagyu Lineage
                      </strong>{" "}
                      — Tibetan Buddhist Tradition
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lineage Section */}
      <section id="lineage" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              The Lineage
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-8">
              Drikung Kagyu Tradition
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              The Drikung Kagyu lineage traces its origins to the Buddha through
              an unbroken chain of realized masters. Founded in 1179 by Kyobpa
              Jikten Sumgön, it is known for the profound practices of
              Mahamudra (the Great Seal), and the Six Yogas of Naropa.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-background border border-border">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold text-xl">ༀ</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Meditation
                </h3>
                <p className="text-muted-foreground text-sm">
                  Emphasis on direct meditation practice and the cultivation of
                  inner wisdom through Mahamudra.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-background border border-border">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold text-xl">☸</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Compassion
                </h3>
                <p className="text-muted-foreground text-sm">
                  Developing bodhicitta—the awakened heart dedicated to the
                  liberation of all beings.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-background border border-border">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold text-xl">✦</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Wisdom
                </h3>
                <p className="text-muted-foreground text-sm">
                  Transmission of authentic Buddhist teachings through an
                  unbroken lineage of masters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-24 bg-maroon">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Connect
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-cream mb-6">
              Join Dr. Lye
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed mb-12">
              Connect to teachings, events, and community through Urban Dharma NC
              and Drikung Dharmakirti International Sangha. All are welcome on the path.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://udharmanc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-lg p-8 hover:bg-cream/20 transition-all duration-300">
                  <h3 className="font-heading text-2xl font-semibold text-cream mb-2 group-hover:text-gold transition-colors">
                    Urban Dharma NC
                  </h3>
                  <p className="text-cream/70 text-sm mb-4">
                    Dr. Lye's home sangha in North Carolina
                  </p>
                  <span className="inline-flex items-center text-gold text-sm font-medium">
                    Visit Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </a>

              <a
                href="https://drikungdharmakirti.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-lg p-8 hover:bg-cream/20 transition-all duration-300">
                  <h3 className="font-heading text-2xl font-semibold text-cream mb-2 group-hover:text-gold transition-colors">
                    Drikung Dharmakirti
                  </h3>
                  <p className="text-cream/70 text-sm mb-4">
                    International practice community
                  </p>
                  <span className="inline-flex items-center text-gold text-sm font-medium">
                    Visit Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="font-heading text-xl text-cream mb-2">
              Dorlöp Rinpoché, Dr. Hun Lye
            </p>
            <p className="text-cream/50 text-sm">
              Sharing the Dharma in the Drikung Kagyu tradition
            </p>
            <div className="mt-6 pt-6 border-t border-cream/10">
              <p className="text-cream/30 text-xs">
                © {new Date().getFullYear()} • May all beings be happy and free
                from suffering
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
