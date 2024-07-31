const sampleListings = [
   {
    title: "Echoes of Eternity",
    description: "In a world where time is fluid and memories are the key to unlocking ancient mysteries, a young mage discovers she holds the key to restoring balance between the realms of the living and the dead. With the fate of both worlds hanging in the balance, she embarks on a perilous journey to confront the darkness that threatens to consume everything she holds dear.",
     image: "https://images.unsplash.com/photo-1598618444143-0c6c6fb69daf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   
     price: 500,
   
     
   },
   {
    title: "Silent Shadows",
    description: "In a world where time is fluid and memories are the key to unlocking ancient mysteries, a young mage discovers she holds the key to restoring balance between the realms of the living and the dead. With the fate of both worlds hanging in the balance, she embarks on a perilous journey to confront the darkness that threatens to consume everything she holds dear.",
     image: "https://images.unsplash.com/photo-1598618589908-36922bcbb433?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     price: 550,
  
   },
   {
     title: "Sands of Serenity",
     description: "When archaeologist Dr. Amelia Grant stumbles upon an ancient artifact buried beneath the shifting sands of the Sahara, she unwittingly triggers a chain of events that catapults her into a world of adventure and peril. With mercenaries hot on her trail and ancient curses lurking in the shadows, she must race against time to unlock the secrets of the artifact before it falls into the wrong hands",
     image: "https://images.unsplash.com/photo-1598618443855-232ee0f819f6?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

     price: 650,
    
   },
   {
     title: "Whispers of the Sea",
     description: "On the windswept shores of Cornwall, a forbidden romance blooms between a spirited young woman and a brooding sea captain with a dark past. As they navigate the treacherous waters of love and loyalty, they must confront their deepest fears and darkest secrets before they can find true happiness in each other's arms.",
     image: "https://images.unsplash.com/photo-1598618253208-d75408cee680?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   
     price: 200,
    
   },
   {
     title: "Chronicles of the Celestial Kingdom",
     description: "In a distant galaxy where technology and magic coexist, a young prince must rise to power and fulfill his destiny as the savior of his people. With the fate of the Celestial Kingdom hanging in the balance, he embarks on an epic quest across the stars, battling ancient foes and forging unlikely alliances in his quest to restore peace to the galaxy.",
     image: "https://images.unsplash.com/photo-1598618443984-28f67f043866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

     price: 890,
 
   },
   {
     title:"The Alchemy of Dreams",
     description: "In a world where dreams hold the power to shape reality, a young dreamweaver must navigate a treacherous landscape of nightmares and illusions to unlock the secrets of her past and harness the true potential of her abilities. With the fate of both the waking and dreaming worlds hanging in the balance, she must confront her greatest fears and embrace her destiny as the chosen one",
     image: "https://images.unsplash.com/photo-1598618356474-79b3ac98e850?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 
     price: 290,
     
   },
   {
     title: "Galactic Odyssey",
     description: "In the distant reaches of space, a ragtag crew of misfits embarks on an epic journey across the galaxy in search of a fabled artifact that holds the key to saving humanity from extinction. With the fate of the universe hanging in the balance, they must navigate treacherous space battles, ancient ruins, and deadly alien worlds to complete their quest before it's too late.",
     image: "https://images.unsplash.com/photo-1598618443737-f865e121d870?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     price: 930,
     
   },
   {
     title: "Hearts Aflame",
     description:
     "Amidst the sweeping landscapes of the Scottish Highlands, a fiery romance ignites between a spirited lass and a brooding laird with a tragic past. As they navigate the treacherous waters of clan politics and forbidden love, they must confront their deepest desires and darkest fears before they can find true happiness in each other's arms",
     image: "https://images.unsplash.com/photo-1598618356585-0b1feb201cd2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

     price: 500,
     
   },
   {
     title: "The Lost City of Atlantis",
     description:
       "When renowned archaeologist Dr. Emily Carter receives a cryptic message hinting at the existence of the legendary lost city of Atlantis, she embarks on a perilous journey across the globe in search of the truth. With rival treasure hunters hot on her trail and ancient guardians lurking in the depths, she must unlock the secrets of Atlantis before it falls into the wrong hands.",
     image: "https://images.unsplash.com/photo-1598618253115-f0d9053d98e2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
     price: 390,
    
   },
   {
     title: "Shadows of the Past",
     description:
       "When a series of gruesome murders rocks the quiet town of Willow Creek, Detective Sarah Lawson is thrust into a race against time to catch a killer whose thirst for vengeance knows no bounds. As she unravels the dark secrets hidden within the town's murky past, she discovers that the key to solving the case may lie closer to home than she ever imagined",
     image: "https://images.unsplash.com/photo-1598618022870-efbec7572931?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 
     price: 450,
  
   },
   {
     title: "The Alchemy of Dreams",
     description:
       "In a world where dreams hold the power to shape reality, a young dreamweaver must navigate a treacherous landscape of nightmares and illusions to unlock the secrets of her past and harness the true potential of her abilities. With the fate of both the waking and dreaming worlds hanging in the balance, she must confront her greatest fears and embrace her destiny as the chosen one.",
     image: "https://images.unsplash.com/photo-1598618022928-36f4870f6642?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

     price: 1000,
    
   },
   {
     title: "Chronicles of the Celestial Kingdom",
     description:
       "In a distant galaxy where technology and magic coexist, a young prince must rise to power and fulfill his destiny as the savior of his people. With the fate of the Celestial Kingdom hanging in the balance, he embarks on an epic quest across the stars, battling ancient foes and forging unlikely alliances in his quest to restore peace to the galaxy",
     image: "https://images.unsplash.com/photo-1598618444143-0c6c6fb69daf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 
     price: 900,
  
   },
   {
     title: "Whispers of the Sea",
     description:
       "On the windswept shores of Cornwall, a forbidden romance blooms between a spirited young woman and a brooding sea captain with a dark past. As they navigate the treacherous waters of love and loyalty, they must confront their deepest fears and darkest secrets before they can find true happiness in each other's arms",
     image: "https://images.unsplash.com/photo-1598618253154-0a7a017209ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
     price: 290,
    
   },
   {
     title: "Galactic Odyssey",
     description:
       "In the distant reaches of space, a ragtag crew of misfits embarks on an epic journey across the galaxy in search of a fabled artifact that holds the key to saving humanity from extinction. With the fate of the universe hanging in the balance, they must navigate treacherous space battles, ancient ruins, and deadly alien worlds to complete their quest before it's too late",
     image: "https://images.unsplash.com/photo-1598618589796-55618df5b901?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

     price: 900,
    
   },
   {
     title: "The Enigma of Elara",
     description:
       "In the mystical realm of Elara, where magic is both revered and feared, a young sorceress discovers she is the key to unlocking an ancient prophecy that could change the fate of the kingdom forever. With dark forces gathering on the horizon, she must embark on a perilous quest to uncover the truth about her past and harness her untapped powers before it's too late.",
     image: "https://images.unsplash.com/photo-1598618443812-a62a7e0c41fc?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 
     price: 800,
    
   },
   {
     title: "Whispers in the Dark",
     description:"When a series of cryptic messages leads investigative journalist Sarah Evans down a dark and twisted path, she uncovers a web of deceit and betrayal that stretches back decades. As she delves deeper into the secrets hidden within the shadows, she realizes that the truth may be more dangerous than she ever imagined",
     image: "https://images.unsplash.com/photo-1598618356298-1456e86a6aec?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
     price: 790,
    
   },
   {
     title: "The Forbidden Forest",
     description:
       "Deep within the heart of the Forbidden Forest lies a secret that could change the course of history. When a group of unlikely heroes stumbles upon an ancient map leading to a hidden treasure, they must brave the dangers of the forest and confront their own fears if they are to unlock the mysteries of the past and secure their future.",
     image: "https://images.unsplash.com/photo-1598618356370-fa80e1ab7cd8?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   
     price: 600,
    
   },
   {
     title: "Love Beyond Time",
     description:
       "In a tale of love that transcends the boundaries of time, a modern-day woman finds herself transported back to the Regency era where she meets a dashing lord with a troubled past. As they navigate the intricacies of society and the dangers of forbidden love, they must overcome obstacles both past and present if they are to find their happily ever afte",
     image: "https://images.unsplash.com/photo-1598618444239-1935339bee32?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

     price: 890,
    
   },
   {
     title: "Echoes of Tomorrow",
     description:
       "Deep within the heart of the Forbidden Forest lies a secret that could change the course of history. When a group of unlikely heroes stumbles upon an ancient map leading to a hidden treasure, they must brave the dangers of the forest and confront their own fears if they are to unlock the mysteries of the past and secure their future",
     image: "https://images.unsplash.com/photo-1598618137594-8e7657a6ef6a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

     price: 400,
   
   },
   {
     title: "Whispers in the Dark",
     description:
       "When a series of cryptic messages leads investigative journalist Sarah Evans down a dark and twisted path, she uncovers a web of deceit and betrayal that stretches back decades. As she delves deeper into the secrets hidden within the shadows, she realizes that the truth may be more dangerous than she ever imagined.",
     image: "https://images.unsplash.com/photo-1598618589904-2264dd50dc87?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 
     price: 500,
          
   },
   {
     title: "The Enigma of Elara",
     description:
       "In the mystical realm of Elara, where magic is both revered and feared, a young sorceress discovers she is the key to unlocking an ancient prophecy that could change the fate of the kingdom forever. With dark forces gathering on the horizon, she must embark on a perilous quest to uncover the truth about her past and harness her untapped powers before it's too late",
     image: "https://images.unsplash.com/photo-1598618023207-93129556744e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

     price: 190,
   },
   {
     title: "Galactic Odyssey",
     description:
       "In the distant reaches of space, a ragtag crew of misfits embarks on an epic journey across the galaxy in search of a fabled artifact that holds the key to saving humanity from extinction. With the fate of the universe hanging in the balance, they must navigate treacherous space battles, ancient ruins, and deadly alien worlds to complete their quest before it's too late.",
     image: "https://images.unsplash.com/photo-1598618253545-e63640435446?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

     price: 870,
    
   },
   {
     title: "Shadows of the Past",
     description:
       "When a series of gruesome murders rocks the quiet town of Willow Creek, Detective Sarah Lawson is thrust into a race against time to catch a killer whose thirst for vengeance knows no bounds. As she unravels the dark secrets hidden within the town's murky past, she discovers that the key to solving the case may lie closer to home than she ever imagined",
     image: "https://images.unsplash.com/photo-1598618356526-421ce8c4d3f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
     price: 750,
    
   },
   {
     title: "The Lost City of Atlantis",
     description:
       "When renowned archaeologist Dr. Emily Carter receives a cryptic message hinting at the existence of the legendary lost city of Atlantis, she embarks on a perilous journey across the globe in search of the truth. With rival treasure hunters hot on her trail and ancient guardians lurking in the depths, she must unlock the secrets of Atlantis before it falls into the wrong hands.",
     image: "https://images.unsplash.com/photo-1598618356474-79b3ac98e850?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

     price: 990,
    
   },
   {
     title: "Hearts Aflame",
     description:
       "Amidst the sweeping landscapes of the Scottish Highlands, a fiery romance ignites between a spirited lass and a brooding laird with a tragic past. As they navigate the treacherous waters of clan politics and forbidden love, they must confront their deepest desires and darkest fears before they can find true happiness in each other's arms",
     image: "https://images.unsplash.com/photo-1598618443855-232ee0f819f6?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

     price: 348,
   
   },
   {
     title: "Echoes of Eternity",
     description:
       "In a world where time is fluid and memories are the key to unlocking ancient mysteries, a young mage discovers she holds the key to restoring balance between the realms of the living and the dead. With the fate of both worlds hanging in the balance, she embarks on a perilous journey to confront the darkness that threatens to consume everything she holds dear.",
     image: "https://images.unsplash.com/photo-1598618253237-217da2e5ecf4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
     price: 770,
    
   },
   {
     title: "Silent Shadows",
     description:
       "In the eerie town of Ravenwood, where secrets whisper in the wind and shadows hold ancient truths, Detective Jameson finds himself entangled in a web of lies and deception. As he delves deeper into the mysteries shrouding the town, he uncovers a darkness that threatens to consume not only his sanity but the very fabric of reality itself",
     image: "https://images.unsplash.com/photo-1598618443840-bea7779f201b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

     price: 680,
    
   },
   {
     title: "Sands of Serenity",
     description:
       "When archaeologist Dr. Amelia Grant stumbles upon an ancient artifact buried beneath the shifting sands of the Sahara, she unwittingly triggers a chain of events that catapults her into a world of adventure and peril. With mercenaries hot on her trail and ancient curses lurking in the shadows, she must race against time to unlock the secrets of the artifact before it falls into the wrong hands",
     image: "https://images.unsplash.com/photo-1598618137621-b0d36866464c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     price: 490,

   },
   {
     title: "Chronicles of the Celestial Kingdom",
     description:
     "In a distant galaxy where technology and magic coexist, a young prince must rise to power and fulfill his destiny as the savior of his people. With the fate of the Celestial Kingdom hanging in the balance, he embarks on an epic quest across the stars, battling ancient foes and forging unlikely alliances in his quest to restore peace to the galaxy.",
     image: "https://images.unsplash.com/photo-1598618590482-181cd9acf027?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     price: 980,

   },
 ];
 
 module.exports = { data: sampleListings };
 