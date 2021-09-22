function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "David Bowie",
            title: "Life On Mars",
            release_year: 1971,
            formats: {
                1: "Vinyl",
                2: "Blu-ray",
                3: "Cassette"
            },
        }
    };
    return myMusic;
}

myFunction()[2];
module.exports = myFunction;