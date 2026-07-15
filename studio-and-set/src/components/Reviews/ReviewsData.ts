// src/data/reviews.ts

export interface Review {
  id: number;
  company: string;
  quote: string;
  author: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    company: "Vanguard Series Labs",
    quote: "“Using traditional channels to crew up an episodic series usually takes our production office weeks of phone tag. Gaffer AI parsed our creative brief and generated a conflict-free, tier-one technical roster in under four minutes. The time saved on compliance paperwork alone paid for the platform premium.”",
    author: "Marcus Vance, VP of Physical Production"
  },
  {
    id: 2,
    company: "Chronos Cinema Group",
    quote: "“We fed Gaffer AI a raw mood board and the script parameters for a gritty, low-light documentary feature. Not only did it map out the exact anamorphic lens packages we need, but it paired us with specialized camera operators who had that specific aesthetic logged in their directory portfolios. Absolute genius.”",
    author: "Elena Rostova, Executive Producer"
  },
  {
    id: 3,
    company: "Helix Media Worldwide",
    quote: "“Commercial production lives and dies by rapid turnaround. Being able to scale our crew up by fifteen operators and lock down a hyper-curated, pre-packaged lighting array in a single checkout loop is exactly what the industry has been missing. Studio and Set is our automated first responder.”",
    author: "Devante Okafor, Head of Logistics"
  },
  {
    id: 4,
    company: "Horizon Broadcast Corp",
    quote: "“The integration of Gaffer AI changed how we handle hardware allocation. Instead of guessing gear configurations for a multi-cam television movie across different locations, the system backend automated the entire equipment manifest based on local sector availability. Zero double-booking friction.”",
    author: "Sarah Jenkins, Technical Director"
  },
  {
    id: 5,
    company: "Frame & Focus Studios",
    quote: "“Using traditional channels to crew up an episodic series usually takes our production office weeks of phone tag. Gaffer AI parsed our creative brief and generated a conflict-free, tier-one technical roster in under four minutes. The time saved on compliance paperwork alone paid for the platform premium.”",
    author: "Christian Beck, Creative Lead"
  }
];