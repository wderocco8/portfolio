import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { type Activity } from "@/types/Activities";

/**
 * TODO: replace each `imgSrc`, `imgAlt`, `title`, `description`
 * and `quicklinks` with your project information.
 */
const activities: Activity[] = [
  // Activity 1
  {
    imgSrc: "/images/activities/activity1.jpeg",
    imgAlt: "Coding with David Malin at HackHarvard.",
    title: "Coding",
    description: (
      <div className="space-y-2">
        <p>
          Even though we have to code constantly for class, this is something
          that I genuinely enjoy learning in my free time.
        </p>
        <p>
          Especially for when it comes to <strong>web-development</strong>,
          where the creative opportunities are literally endless, I find myself
          spending hours going down rabbit holes of formative exploration.
        </p>
      </div>
    ),
    quicklinks: [
      { href: "https://github.com/whyphi", name: "WhyPhi" },
      { href: "https://grub-gallery.vercel.app/", name: "GrubGallery" },
      { href: "https://github.com/wderocco8/ZipSurf", name: "ZipSurf" },
      {
        href: "https://github.com/alexjmiller5/BU-GCalSync",
        name: "BU-GCalSync",
      },
    ],
  },
  // Activity 2
  {
    imgSrc: "/images/activities/activity2.jpeg",
    imgAlt: "Rock climbing at FitRec.",
    title: "Rock Climbings",
    description: (
      <div className="space-y-2">
        <p>
          I started rock climbing about 2 years ago, and since then, it has been
          nothing short of amazing (maybe even <em>addicting</em>).
        </p>
        <p>
          I love the challenge of finding the optimal "beta" through a problem,
          and pushing your body to it's limit.
        </p>
      </div>
    ),
    quicklinks: [
      {
        href: "https://www.bu.edu/fitrec/what-we-offer/outdoor-programs/rock-climbing/",
        name: "Fitrec Climbing Wall",
      },
    ],
  },
  // Activity 3
  {
    imgSrc: "/images/activities/activity3.jpeg",
    imgAlt: "Tabling with PCT (Phi Chi Theta).",
    title: "BU Phi Chi Theta (PCT)",
    description: (
      <div className="space-y-2">
        <p>
          I joined PCT (a professional business fraternity) my very first
          semesert at BU. It was probably one of the most impactful decsions
          I've made in terms of the <strong>friends</strong> made,{" "}
          <strong>skills</strong> acquired, and abundance of unique experiences.
          (Feel free to check out our website WhyPhi 😜)
        </p>
      </div>
    ),
    quicklinks: [
      { href: "https://bupct.com/", name: "BUPCT" },
      { href: "https://github.com/whyphi", name: "WhyPhi" },
    ],
  },
  // Activity 4
  {
    imgSrc: "/images/activities/activity4.jpeg",
    imgAlt: "Cooking with my mom.",
    title: "Cooking",
    description: (
      <div className="space-y-2">
        <p>
          Growing up, I always had the opportunity to watch my mom cook, and
          even help out in the kitchen. Once my parents started working more, I
          ended up taking more responsibility for cooking meals for the whole
          family.
        </p>
        <p>
          This slowly grew into a passion, and now is something that I spend a
          lot of free time doing for fun!
        </p>
      </div>
    ),
    quicklinks: [
      { href: "https://www.babi.sh/", name: "Babish Culinary Universe" },
      { href: "https://cooking.nytimes.com/", name: "NYT Cooking" },
    ],
  },
];

/**
 * `Activities` returns a list of `Activity` components,
 * defined in the following component. Be sure to replace
 * all of the information in this file (do not edit `Activity.tsx`
 * only edit list of `activities` above.)
 */
export default function Activities() {
  return (
    <div>
      {/* TODO: with your info --> */}
      <h2 className="text-2xl font-bold mb-4" id="interests">
        How I spend my free time?
      </h2>
      <Carousel className="w-full ">
        <CarouselContent>
          {activities.map((activity, index) => (
            <Drawer>
              <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
                <div className="p-1">
                  <DrawerTrigger>
                    <Card className="hover:cursor-pointer p-0 aspect-square overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={activity.imgSrc}
                        alt={activity.imgAlt}
                      />
                    </Card>
                  </DrawerTrigger>
                </div>
              </CarouselItem>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>{activity.title}</DrawerTitle>
                  <DrawerDescription>{activity.description}</DrawerDescription>
                  {activity.quicklinks.length > 0 && (
                    <div className="mt-4 space-y-1">
                      <h4 className="font-semibold text-sm">Quicklinks</h4>
                      <ul className="text-muted-foreground list-disc list-inside ml-4 space-y-1">
                        {activity.quicklinks.map((link, i) => (
                          <li key={i}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
