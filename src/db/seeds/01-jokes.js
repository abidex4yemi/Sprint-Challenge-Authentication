/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  return knex('jokes').insert([
    {
      joke: "Did you hear about the guy whose whole left side was cut off? He's all right now.",
    },
    {
      joke: 'Why didn’t the skeleton cross the road? Because he had no guts.',
    },
    {
      joke: "What did one nut say as he chased another nut?  I'm a cashew!",
    },
    {
      joke: "Chances are if you' ve seen one shopping center, you've seen a mall.",
    },
    {
      joke: "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take.",
    },
    {
      joke: 'How come the stadium got hot after the game? Because all of the fans left.',
    },
    {
      joke: 'Why was it called the dark ages? Because of all the knights. ',
    },
    {
      joke: 'A steak pun is a rare medium well done.',
    },
    {
      joke: 'Why did the tomato blush? Because it saw the salad dressing.',
    },
    {
      joke: 'Did you hear the joke about the wandering nun? She was a roman catholic.',
    },
    {
      joke: 'What creature is smarter than a talking parrot? A spelling bee.',
    },
    {
      joke: "I'll tell you what often gets over looked... garden fences.",
    },
    {
      joke: 'Why did the kid cross the playground? To get to the other slide.',
    },
    {
      joke: "Why do birds fly south for the winter? Because it's too far to walk.",
    },
    {
      joke: "What is a centipedes's favorite Beatle song?  I want to hold your hand, hand, hand, hand...",
    },
    {
      joke: 'My first time using an elevator was an uplifting experience. The second time let me down.',
    },
    {
      joke: "To be Frank, I'd have to change my name.",
    },
    {
      joke: 'Slept like a log last night … woke up in the fireplace.',
    },
    {
      joke: "Why does a Moon-rock taste better than an Earth-rock? Because it's a little meteor.",
    },
    {
      joke: 'My first time using an elevator was an uplifting experience. The second time let me down.',
    },
    {
      joke: "To be Frank, I'd have to change my name.",
    },
    {
      joke: 'Slept like a log last night … woke up in the fireplace.',
    },
    {
      joke: "Why does a Moon-rock taste better than an Earth-rock? Because it's a little meteor.",
    },
  ]);
};
