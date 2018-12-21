var player = {
    name: "Tom",
    age: 25,
    position: 'LF',
    throwingHand: 'R',
    team: 'Red Sox',
    pastTeams: [],
    teammates: [
        {
            name: "Jim",
            age: 28,
            position: "SS",
            throwingHand: 'R',
            pastTeams: [
                'Rockies',
                'Marlins',
                'Dodgers'
            ],
            teammates: [
                {
                    name: 'Randy',
                    age: 33,
                    position: 'P',
                    throwingHand: 'L',
                    pastTeams: [
                        'Mariners',
                        'Diamondbacks',
                        'Athletics'
                    ]
                }
            ]
        },
        {
            name: "Alen",
            age: 27,
            position: 'C',
            throwingHand: 'R',
            pastTeams: [
                'Yankees',
                'Pirates',
                'Braves'
            ]
        },
        {
            name: "Ben",
            age: 31,
            position: '1B',
            throwingHand: 'L',
            pastTeams: []
        }
    ]
}