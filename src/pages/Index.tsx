import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/cc16d68c-41af-43dd-b2e4-4410b3ed68d7.png" 
              alt="Логотип" 
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection("types")} className="text-sm font-medium hover:text-primary transition-colors">Виды ЭД</button>
            <button onClick={() => scrollToSection("diagnosis")} className="text-sm font-medium hover:text-primary transition-colors">Диагностика</button>
            <button onClick={() => scrollToSection("treatment")} className="text-sm font-medium hover:text-primary transition-colors">Лечение</button>
            <button onClick={() => scrollToSection("doctors")} className="text-sm font-medium hover:text-primary transition-colors">Специалисты</button>
            <button onClick={() => scrollToSection("prices")} className="text-sm font-medium hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection("reviews")} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection("contacts")} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
          </nav>
          <Button onClick={() => scrollToSection("contacts")}>Записаться</Button>
        </div>
      </header>

      <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Эффективное лечение эректильной дисфункции
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Современные методы диагностики и индивидуальный подход к лечению. Конфиденциально, профессионально, результативно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection("contacts")} className="text-lg">
                  Записаться на прием
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("types")} className="text-lg">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/2929517a-3474-4506-b81e-4dfecfade323/files/49450136-518f-4fc7-9b9b-57ed113606cf.jpg"
                alt="Медицинская консультация"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-y bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 animate-fade-in">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Award" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ лет опыта</h3>
              <p className="text-muted-foreground">Квалифицированные специалисты с богатым опытом</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Users" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">5000+ пациентов</h3>
              <p className="text-muted-foreground">Успешно решили проблему со здоровьем</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="ShieldCheck" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% конфиденциально</h3>
              <p className="text-muted-foreground">Гарантируем полную анонимность</p>
            </div>
          </div>
        </div>
      </section>

      <section id="types" className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Виды эректильной дисфункции</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Понимание типа проблемы — первый шаг к эффективному лечению
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Brain" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Психогенная</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Связана с психологическими факторами: стресс, тревожность, депрессия. Требует комплексного подхода с участием психотерапевта.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Activity" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Органическая</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Вызвана физическими причинами: сосудистые нарушения, эндокринные заболевания, неврологические проблемы.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Blend" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Смешанная</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Сочетание психологических и органических факторов. Наиболее распространенный тип, требующий комплексного лечения.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="diagnosis" className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/2929517a-3474-4506-b81e-4dfecfade323/files/325bc5cc-958b-4716-8ab1-92b1082b5cf0.jpg"
                alt="Диагностическое оборудование"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Комплексная диагностика</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Точная диагностика — основа успешного лечения. Используем современное оборудование и проверенные методики.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Icon name="FileText" className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Первичная консультация</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pl-8">
                    Подробный сбор анамнеза, изучение истории заболевания, выявление факторов риска и сопутствующих патологий.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Icon name="TestTube" className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Лабораторные анализы</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pl-8">
                    Анализы крови на гормоны (тестостерон, пролактин), глюкозу, липидный профиль. Позволяют выявить эндокринные нарушения.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Icon name="Scan" className="h-5 w-5 text-primary" />
                      <span className="font-semibold">УЗИ диагностика</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pl-8">
                    Допплерография сосудов для оценки кровотока. Выявляет сосудистые причины дисфункции.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Icon name="ClipboardCheck" className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Специализированные тесты</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pl-8">
                    Психологическое тестирование, оценка качества жизни, специфические тесты для точной постановки диагноза.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section id="treatment" className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Методы лечения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Индивидуальный подход и современные методики для достижения лучших результатов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-slide-up">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Pill" className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Медикаментозная терапия</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Ингибиторы ФДЭ-5</h4>
                  <p className="text-muted-foreground">Препараты первой линии: силденафил, тадалафил, варденафил. Эффективность до 80%.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Гормональная терапия</h4>
                  <p className="text-muted-foreground">При выявленном дефиците тестостерона. Нормализация гормонального фона.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Вспомогательные препараты</h4>
                  <p className="text-muted-foreground">БАДы, витамины, средства для улучшения кровообращения.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Zap" className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Физиотерапия</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Ударно-волновая терапия</h4>
                  <p className="text-muted-foreground">Стимуляция роста новых сосудов, улучшение кровоснабжения. Курс 6-12 процедур.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Лазеротерапия</h4>
                  <p className="text-muted-foreground">Улучшение микроциркуляции, противовоспалительный эффект.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Вакуумная терапия</h4>
                  <p className="text-muted-foreground">Механическая стимуляция кровотока, тренировка сосудов.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="MessageCircle" className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Психотерапия</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Индивидуальные сеансы</h4>
                  <p className="text-muted-foreground">Работа со стрессом, тревожностью, психологическими блоками.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Парная терапия</h4>
                  <p className="text-muted-foreground">Улучшение коммуникации в паре, преодоление сексуальных проблем вместе.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Когнитивно-поведенческая терапия</h4>
                  <p className="text-muted-foreground">Изменение негативных установок, формирование здоровых паттернов.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Settings" className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Хирургические методы</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Реваскуляризация</h4>
                  <p className="text-muted-foreground">Восстановление кровоснабжения при сосудистых проблемах.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Протезирование</h4>
                  <p className="text-muted-foreground">Имплантация протезов при неэффективности консервативного лечения.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Коррекция деформаций</h4>
                  <p className="text-muted-foreground">Устранение анатомических причин дисфункции.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши специалисты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Опытные врачи с подтвержденной квалификацией
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center animate-slide-up">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/2929517a-3474-4506-b81e-4dfecfade323/files/c18cd7c1-4be1-4d22-af69-02c4741dbcc4.jpg"
                    alt="Доктор Иванов"
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <CardTitle>Иванов Сергей Петрович</CardTitle>
                <CardDescription className="text-base">Врач-уролог, андролог</CardDescription>
              </CardHeader>
              <CardContent className="text-left space-y-2">
                <div className="flex items-start gap-2">
                  <Icon name="GraduationCap" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Стаж 18 лет</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Award" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Высшая категория</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="BookOpen" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Кандидат медицинских наук</span>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="mb-4">
                  <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-lg">
                    <Icon name="User" className="h-16 w-16 text-primary/60" />
                  </div>
                </div>
                <CardTitle>Петрова Анна Викторовна</CardTitle>
                <CardDescription className="text-base">Психотерапевт, сексолог</CardDescription>
              </CardHeader>
              <CardContent className="text-left space-y-2">
                <div className="flex items-start gap-2">
                  <Icon name="GraduationCap" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Стаж 12 лет</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Award" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Первая категория</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="BookOpen" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Сертификат сексолога</span>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="mb-4">
                  <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-lg">
                    <Icon name="User" className="h-16 w-16 text-primary/60" />
                  </div>
                </div>
                <CardTitle>Смирнов Дмитрий Олегович</CardTitle>
                <CardDescription className="text-base">Врач-эндокринолог</CardDescription>
              </CardHeader>
              <CardContent className="text-left space-y-2">
                <div className="flex items-start gap-2">
                  <Icon name="GraduationCap" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Стаж 15 лет</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Award" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Высшая категория</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="BookOpen" className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Специализация: мужское здоровье</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Цены на услуги</h2>
            <p className="text-lg text-muted-foreground">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
          <Card className="animate-slide-up">
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors">
                  <div>
                    <h4 className="font-semibold mb-1">Первичная консультация уролога-андролога</h4>
                    <p className="text-sm text-muted-foreground">Сбор анамнеза, осмотр, рекомендации</p>
                  </div>
                  <span className="text-xl font-bold text-primary">2 500 ₽</span>
                </div>
                <div className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors">
                  <div>
                    <h4 className="font-semibold mb-1">Повторная консультация</h4>
                    <p className="text-sm text-muted-foreground">Контроль лечения, коррекция терапии</p>
                  </div>
                  <span className="text-xl font-bold text-primary">1 800 ₽</span>
                </div>
                <div className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors">
                  <div>
                    <h4 className="font-semibold mb-1">УЗИ диагностика с допплерографией</h4>
                    <p className="text-sm text-muted-foreground">Оценка кровотока и сосудов</p>
                  </div>
                  <span className="text-xl font-bold text-primary">3 200 ₽</span>
                </div>
                <div className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors">
                  <div>
                    <h4 className="font-semibold mb-1">Комплекс лабораторных анализов</h4>
                    <p className="text-sm text-muted-foreground">Гормоны, биохимия крови</p>
                  </div>
                  <span className="text-xl font-bold text-primary">4 500 ₽</span>
                </div>
                <div className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors">
                  <div>
                    <h4 className="font-semibold mb-1">Ударно-волновая терапия (1 сеанс)</h4>
                    <p className="text-sm text-muted-foreground">Курс из 6-10 процедур</p>
                  </div>
                  <span className="text-xl font-bold text-primary">3 800 ₽</span>
                </div>
                <div className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors">
                  <div>
                    <h4 className="font-semibold mb-1">Консультация психотерапевта</h4>
                    <p className="text-sm text-muted-foreground">Индивидуальный сеанс 50 минут</p>
                  </div>
                  <span className="text-xl font-bold text-primary">3 500 ₽</span>
                </div>
                <div className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors">
                  <div>
                    <h4 className="font-semibold mb-1">Комплексная программа диагностики</h4>
                    <p className="text-sm text-muted-foreground">Все необходимые обследования</p>
                  </div>
                  <span className="text-xl font-bold text-primary">12 000 ₽</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-muted-foreground mt-6 animate-fade-in">
            * Стоимость лечения рассчитывается индивидуально после диагностики
          </p>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы пациентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные истории людей, которые вернули уверенность в себе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="animate-slide-up">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "Обратился к профессору Чалому после долгих сомнений. Очень благодарен за деликатный подход и эффективное лечение. Проблема решена за 2 месяца!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">АС</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Александр С.</p>
                    <p className="text-xs text-muted-foreground">42 года, Москва</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "Комплексный подход и современное оборудование дали результат. Врачи профессиональны, внимательны. Рекомендую всем, кто столкнулся с подобной проблемой."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">ДМ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Дмитрий М.</p>
                    <p className="text-xs text-muted-foreground">38 лет, Санкт-Петербург</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "Важно было найти специалиста, которому можно доверять. Профессор Чалый — настоящий эксперт. Полная конфиденциальность, индивидуальный подход. Спасибо!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">ВК</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Владимир К.</p>
                    <p className="text-xs text-muted-foreground">51 год, Москва</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "После обследования назначили комплексное лечение. Уже через месяц почувствовал улучшения. Персонал вежливый, атмосфера комфортная. Очень доволен!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">ИП</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Игорь П.</p>
                    <p className="text-xs text-muted-foreground">45 лет, Казань</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "Современный подход к лечению, без устаревших методов. Врач подробно объяснил все этапы терапии. Результат превзошел ожидания. Рекомендую клинику!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">МА</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Михаил А.</p>
                    <p className="text-xs text-muted-foreground">49 лет, Екатеринбург</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                  <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "Обращался в несколько клиник, но здесь нашел то, что нужно. Профессионализм, современное оборудование и главное — результат. Жизнь изменилась к лучшему!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">СН</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Сергей Н.</p>
                    <p className="text-xs text-muted-foreground">55 лет, Новосибирск</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Card className="inline-block bg-accent/10 border-accent/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="text-left">
                    <p className="text-3xl font-bold text-primary mb-1">4.9/5.0</p>
                    <p className="text-sm text-muted-foreground">Средняя оценка</p>
                  </div>
                  <div className="h-12 w-px bg-border"></div>
                  <div className="text-left">
                    <p className="text-3xl font-bold text-primary mb-1">500+</p>
                    <p className="text-sm text-muted-foreground">Довольных пациентов</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Запись на прием</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Форма записи</CardTitle>
                <CardDescription>Заполните форму, и наш администратор свяжется с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Спасибо! Мы свяжемся с вами в ближайшее время."); }}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ivan@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea id="message" placeholder="Опишите вашу проблему или вопрос..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-muted-foreground">г. Москва, ул. Медицинская, д. 10, корп. 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">Ежедневно с 8:00 до 21:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">info@medcentr.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Режим работы</h4>
                      <p className="text-muted-foreground">Пн-Пт: 8:00 - 21:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 9:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="ShieldCheck" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Конфиденциальность гарантирована</h4>
                      <p className="text-sm text-muted-foreground">
                        Все консультации проходят в строго конфиденциальной обстановке. 
                        Мы соблюдаем врачебную тайну и гарантируем полную анонимность.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/cc16d68c-41af-43dd-b2e4-4410b3ed68d7.png" 
                  alt="Логотип" 
                  className="h-10"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональное лечение эректильной дисфункции. Современные методы, опытные врачи.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection("home")} className="block text-muted-foreground hover:text-primary transition-colors">Главная</button>
                <button onClick={() => scrollToSection("types")} className="block text-muted-foreground hover:text-primary transition-colors">Виды ЭД</button>
                <button onClick={() => scrollToSection("diagnosis")} className="block text-muted-foreground hover:text-primary transition-colors">Диагностика</button>
                <button onClick={() => scrollToSection("treatment")} className="block text-muted-foreground hover:text-primary transition-colors">Лечение</button>
                <button onClick={() => scrollToSection("doctors")} className="block text-muted-foreground hover:text-primary transition-colors">Специалисты</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
                <p>info@medcentr.ru</p>
                <p>г. Москва, ул. Медицинская, 10</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 МедЦентр. Все права защищены. Лицензия № ЛО-77-01-012345</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;