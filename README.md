# Gobble

[![Netlify Status](https://api.netlify.com/api/v1/badges/04e7125e-8d08-412e-9526-a0eb1acf0b48/deploy-status)](https://app.netlify.com/sites/gobble-game/deploys)

## Background

I like playing Jumbo Boggle with my family. But we lost our Boggle board. Also my work recently gave me access to GitHub Copilot. So I decided to put it through its paces creating a Boggle board generator.

My goal was simple: Don't write any of the code myself. Ask GitHub Copilot to generate the code using only the level of detail you might get from a semi-technical product manager, describing the output of its code, and ask it to fix it based on what I see so it can iterate on it. This is the result.

## Play it yourself

You can view the game yourself at [here](https://gobble-game.netlify.app/)

## How did the AI do?

_Extremely well_. I broke my "I don't write the code" rule in two small ways:

1. I wrote the dice letter configurations by hand
2. I specified a single hex color code in the CSS file

But #1 is configuration, so I'll argue it doesn't count as code, and #2 was just cuz I was too lazy to tell Copilot "Use this hex." All the _meaningful_ code-- everything from the npm initialization commands to what you see now-- was generated by GitHub Copilot in response to my prompts.

The time savings were huge. With my nudging, GitHub Copilot was able to write it in about 2 hours. With my limited experience with React and some of the more complex CSS rules, it would have taken me 3-4 times as long. Especially figuring out how to make it resize on ~~all~~ _most_ 😉 screens.

## Limitations

I noticed that the larger my project got, the less accurate Copilot was. I think this is mainly because it had a hard time keeping track of all the context. I've noticed the same limitation as I've used it professionally at work-- it will often assume methods and fields are present that aren't there, or give you the implementation in a different version of a library than you are actually using. But it seems to get better and better with each release.

Another thing I noticed was the longer a "conversation" went on, the more biased it would get towards an incorrect approach it generated earlier in the conversation. I eventually found it best to wipe the conversation every time I wanted to switch to a different topic. "Okay it got the style mostly right, now I want to foxus on the dice generator, so let's click reset..."

Can I see this replacing me and taking my job? No. The way I see it, Copilot (and other LLM-powered coding solutions) are like having a junior developer pairing with you all the time. A junior developer that is really, really fast and has memorized the API documentation for every open source library out there, but a junior developer nonetheless. This isn't going to replace developers, but it is going to put tremendous pressure on developers to get out of the "coding" mindset and into the "architecture" mindset.
