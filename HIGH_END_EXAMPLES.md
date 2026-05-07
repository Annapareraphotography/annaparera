# High-End Component Examples for Shabaky

## 1. Glass Morphism Hero with Animated Stats

```tsx
<div className="relative">
  {/* Glass card floating above background */}
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px]">
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
      <div className="grid grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-4xl font-bold text-white mb-2">
            <CountUp end={500} duration={2} />+
          </div>
          <div className="text-sm text-white/80">Sites Launched</div>
          <Progress value={85} className="mt-2" />
        </div>
        <div>
          <div className="text-4xl font-bold text-white mb-2">24h</div>
          <div className="text-sm text-white/80">Avg Delivery</div>
          <Progress value={95} className="mt-2" />
        </div>
        <div>
          <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
          <div className="text-sm text-white/80">Client Rating</div>
          <Progress value={98} className="mt-2" />
        </div>
      </div>
    </div>
  </div>
</div>
```

**Visual:** Translucent card with blur effect, animated counting numbers, progress bars

---

## 2. Interactive Feature Cards with HoverCard

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <Card className="border-2 hover:border-yellow-400 transition-all cursor-pointer hover:shadow-xl hover:scale-105">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mb-4">
          <Zap className="size-6 text-white" />
        </div>
        <CardTitle>24-Hour Delivery</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          From brief to live website in 24 hours.
        </p>
      </CardContent>
    </Card>
  </HoverCardTrigger>
  <HoverCardContent className="w-80" side="top">
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">How it works</h4>
      <p className="text-sm text-muted-foreground">
        Our AI analyzes your business, generates multiple designs, and our team 
        refines the best option. You get a working site in under 24 hours.
      </p>
      <Separator />
      <div className="flex gap-2">
        <Badge variant="secondary">AI Design</Badge>
        <Badge variant="secondary">Human Polish</Badge>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

**Visual:** Card that lifts on hover, shows detailed popup with more information

---

## 3. Testimonials with ScrollArea

```tsx
<ScrollArea className="w-full">
  <div className="flex gap-6 pb-4">
    {testimonials.map((testimonial) => (
      <Card key={testimonial.id} className="min-w-[400px] border-2">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="size-12">
              <AvatarImage src={testimonial.avatar} />
              <AvatarFallback>{testimonial.initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">
                {testimonial.business}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
          <p className="text-muted-foreground italic">
            "{testimonial.quote}"
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
</ScrollArea>
```

**Visual:** Horizontal scrolling testimonial cards with stars and avatars

---

## 4. FAQ Section with Accordion

```tsx
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>How long does it take to launch?</AccordionTrigger>
    <AccordionContent>
      <p className="text-muted-foreground">
        Your website will be ready in 24 hours. We generate the initial design 
        using AI, our team refines it, and you review. Once approved, we deploy 
        immediately to your domain.
      </p>
      <Separator className="my-4" />
      <div className="flex gap-2">
        <Badge>Fast</Badge>
        <Badge>Automated</Badge>
        <Badge>Quality Assured</Badge>
      </div>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="item-2">
    <AccordionTrigger>Do I need technical knowledge?</AccordionTrigger>
    <AccordionContent>
      <p className="text-muted-foreground">
        Zero technical knowledge required. We handle everything: design, 
        development, hosting, SSL certificates, backups, and updates.
      </p>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="item-3">
    <AccordionTrigger>Can I use my own domain?</AccordionTrigger>
    <AccordionContent>
      <p className="text-muted-foreground">
        Yes! Professional and Premium plans include custom domain support. 
        We'll help you point your domain to our servers (or we can register 
        one for you).
      </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

**Visual:** Clean expandable FAQ with smooth animations

---

## 5. Pricing with Tabs (Monthly/Annual)

```tsx
<Tabs defaultValue="monthly" className="w-full">
  <div className="flex justify-center mb-8">
    <TabsList>
      <TabsTrigger value="monthly">Monthly</TabsTrigger>
      <TabsTrigger value="annual">
        Annual
        <Badge className="ml-2 bg-green-500">Save 20%</Badge>
      </TabsTrigger>
    </TabsList>
  </div>
  
  <TabsContent value="monthly">
    <div className="grid md:grid-cols-3 gap-8">
      {/* Monthly pricing cards */}
    </div>
  </TabsContent>
  
  <TabsContent value="annual">
    <div className="grid md:grid-cols-3 gap-8">
      {/* Annual pricing cards (discounted) */}
    </div>
  </TabsContent>
</Tabs>
```

**Visual:** Toggle between monthly/annual with smooth transition and savings badge

---

## 6. Growth Chart Section

```tsx
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", sites: 12 },
  { month: "Feb", sites: 28 },
  { month: "Mar", sites: 45 },
  { month: "Apr", sites: 73 },
  { month: "May", sites: 112 },
]

<Card className="border-2">
  <CardHeader>
    <CardTitle>Sites Launched (Last 6 Months)</CardTitle>
    <CardDescription>Growing 40% month-over-month</CardDescription>
  </CardHeader>
  <CardContent>
    <ChartContainer className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorSites" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <ChartTooltip />
          <Area 
            type="monotone" 
            dataKey="sites" 
            stroke="#F59E0B" 
            fillOpacity={1} 
            fill="url(#colorSites)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  </CardContent>
</Card>
```

**Visual:** Beautiful area chart showing growth metrics

---

## 7. Demo Sites Drawer (Mobile-Optimized)

```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button size="lg" variant="outline">
      Browse Live Demos
      <ExternalLink className="ml-2" data-icon="inline-end" />
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Live Demo Sites</DrawerTitle>
      <DrawerDescription>
        Click any site to explore it in a new tab
      </DrawerDescription>
    </DrawerHeader>
    <ScrollArea className="h-[400px] px-4">
      <div className="space-y-4">
        {demos.map((demo) => (
          <Card key={demo.id} className="p-4">
            <div className="flex items-center gap-4">
              <img 
                src={demo.thumbnail} 
                alt={demo.name}
                className="size-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold">{demo.name}</h4>
                <p className="text-sm text-muted-foreground">{demo.industry}</p>
                <div className="flex gap-2 mt-2">
                  <Badge>{demo.plan}</Badge>
                  <Badge variant="secondary">{demo.category}</Badge>
                </div>
              </div>
              <Button size="sm" asChild>
                <a href={demo.url} target="_blank">Visit</a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </ScrollArea>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

**Visual:** Mobile-friendly bottom sheet with scrollable demo list

---

## 8. Feature Comparison with Collapsible Details

```tsx
<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost" className="w-full justify-between">
      Compare all features
      <ChevronDown className="size-4" data-icon="inline-end" />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Feature</TableHead>
          <TableHead>Starter</TableHead>
          <TableHead>Professional</TableHead>
          <TableHead>Premium</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Bandwidth</TableCell>
          <TableCell>10 GB</TableCell>
          <TableCell>50 GB</TableCell>
          <TableCell>Unlimited</TableCell>
        </TableRow>
        {/* More rows */}
      </TableBody>
    </Table>
  </CollapsibleContent>
</Collapsible>
```

**Visual:** Expandable detailed feature comparison table

---

## Which direction do you want to go?

**Option A: Start with Hero** - Glass morphism, animated stats, trust indicators
**Option B: Add Social Proof** - Testimonials, charts, case studies  
**Option C: Enhance Features** - HoverCards, interactive demos
**Option D: Polish Pricing** - Tabs, comparison table, calculator
**Option E: Add FAQ** - Accordion section before CTA
**Option F: Do it all** - Let me build the complete enhanced version

Let me know which you'd like to focus on first, or I can start implementing the full vision!
