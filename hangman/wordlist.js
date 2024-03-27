const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings.",
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life.",
    },


    {
        word: "football",
        hint: "A popular sport played with a spherical ball.",
    },

    {
        word: "history",
        hint: "The study of past events and human civilization.",
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings.",
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation.",
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos.",
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness.",
    },

    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world.",
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels.",
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon.",
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans.",
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music.",
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity.",
    },


    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters.",
    },

    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements.",
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space.",
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height.",
    },

    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.",
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole.",
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation.",
    },

    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
    },

    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation.",
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head.",
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements.",
    },

    {
        word: "breeze",
        hint: "A gentle wind.",
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found.",
    },

    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own.",
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
    },

    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify.",
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand.",
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition.",
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner.",
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light.",
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others.",
    },

    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown.",
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression.",
    },

    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life.",
    },
    {
        word: "umbrella",
        hint: "Used to shield from rain or sun.",
    },
    {
        word: "banana",
        hint: "A yellow fruit often eaten for breakfast.",
    },
    {
        word: "computer",
        hint: "An electronic device used for processing data.",
    },
    {
        word: "book",
        hint: "Contains pages with printed or written information.",
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the earth's surface.",
    },
    {
        word: "bicycle",
        hint: "A two-wheeled vehicle powered by pedals.",
    },
    {
        word: "television",
        hint: "A device used for viewing broadcast programs.",
    },
    {
        word: "pencil",
        hint: "Used for writing or drawing, typically with graphite.",
    },
    {
        word: "dog",
        hint: "A domesticated mammal often kept as a pet.",
    },
    {
        word: "garden",
        hint: "An area of land used for growing plants or flowers.",
    },
    {
        word: "pizza",
        hint: "A popular Italian dish with melted cheese and tomato sauce."
    },
    {
        word: "ocean",
        hint: "A large body of saltwater covering much of Earth's surface."
    },
    {
        word: "camera",
        hint: "A device used to capture photographs or record videos."
    },
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "basketball",
        hint: "A sport played with a round ball and hoop."
    },
    {
        word: "couch",
        hint: "A piece of furniture used for seating."
    },
    {
        word: "tree",
        "hint": "A woody perennial plant with a single main stem or trunk."
    },
    {
        word: "moon",
        hint: "Earth's natural satellite that orbits around it."
    },
    {
        word: "coffee",
        hint: "A popular beverage made from roasted coffee beans."
    },
    {
        word: "keyboard",
        hint: "An input device used to type characters into a computer."
    },
    {
        word: "elephant",
        hint: "A large mammal with a trunk and tusks, native to Africa and Asia."
    },
    {
        word: "chocolate",
        hint: "A sweet, usually brown food made from roasted and ground cacao seeds."
    },
    {
        word: "butterfly",
        hint: "An insect with two pairs of large wings that are often brightly colored."
    },
    {
        word: "telephone",
        hint: "A device used for transmitting sound over long distances."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the earth's surface."
    },
    {
        word: "keyboard",
        hint: "An input device used to type characters into a computer."
    },
    {
        word: "garden",
        hint: "An area of land used for growing plants or flowers."
    },
    {
        word: "penguin",
        hint: "A flightless bird found in the Southern Hemisphere."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    }



];
