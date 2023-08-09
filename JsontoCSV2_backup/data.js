var json_data = [
    {
        "id": "1",
        "type": "exhibition",
        "color": "orange",
        "url": "/exhibition/test-exhibition",
        "src": {
            "entryData": {
                "project": "Creative Women: Southeast Asia",
                "dateEntryCreated": "2023-04-23",
                "dataSource": ["ukykyuk", "90"]
            },
            "exhibitionInformation": {
                "basicInformation": {
                    "title": "Test Exhibition",
                    "description": null,
                    "exhibitionType": ["Festival", "Group", "Solo"],
                    "group": [],
                    "venue": []
                },
                "dataAndPlace": {
                    "startDate": "1801",
                    "startPrecision": "This decade",
                    "startApproximate": null,
                    "endDate": "2002",
                    "endPrecision": "This century",
                    "endApproximate": null,
                    "place": "Sydney NSW, Australia",
                    "location": { "lat": -33.86882, "lon": 151.209295 }
                },
                "website": null,
                "person": ["Jane Smith"]
            }
        }
    },
    {
        "id": "2",
        "type": "exhibition",
        "color": "orange",
        "url": "/exhibition/test-exhibition-2",
        "src": {
            "entryData": {
                "project": "Creative Women: Southeast Asia",
                "dateEntryCreated": "2023-04-24",
                "dataSource": ["Data 1", "Data 2", "Data 2"]
            },
            "exhibitionInformation": {
                "basicInformation": {
                    "title": "Test Exhibition 2",
                    "description": "hrthr",
                    "exhibitionType": ["Biennale", "Fair", "Festival"],
                    "group": ["876"],
                    "venue": ["432", "57", "6456"]
                },
                "dataAndPlace": {
                    "startDate": "1801",
                    "startPrecision": "This century",
                    "startApproximate": null,
                    "endDate": "2023",
                    "endPrecision": "This century",
                    "endApproximate": "1",
                    "place": "18 Rider Blvd, Rhodes NSW 2138, Australia",
                    "location": { "lat": -33.833947, "lon": 151.085056 }
                },
                "website": "http://baidu.com",
                "person": ["John Doe", "Jane Smith"]
            }
        }
    },
    {
        "id": "16",
        "type": "exhibition",
        "color": "orange",
        "url": "/exhibition/test",
        "src": {
            "entryData": {
                "project": "Creative Women: Southeast Asia",
                "dateEntryCreated": "2023-05-16",
                "dataSource": ["fwefew"]
            },
            "exhibitionInformation": {
                "basicInformation": {
                    "title": "Test",
                    "description": null,
                    "exhibitionType": ["Biennale"],
                    "group": ["fwe"],
                    "venue": ["fwe"]
                },
                "dataAndPlace": {
                    "startDate": "1801",
                    "startPrecision": "This century",
                    "startApproximate": "1",
                    "endDate": "2002",
                    "endPrecision": "This month",
                    "endApproximate": "1",
                    "place": "Melbourne VIC, Australia",
                    "location": { "lat": -37.813628, "lon": 144.963058 }
                },
                "website": null,
                "person": []
            }
        }
    },
    {
        "id": "28",
        "type": "exhibition",
        "color": "orange",
        "url": "/exhibition/haris-li-life",
        "src": {
            "entryData": {
                "project": "Creative Women: Southeast Asia",
                "dateEntryCreated": "2023-05-23",
                "dataSource": ["https://www.ngv.vic.gov.au/"]
            },
            "exhibitionInformation": {
                "basicInformation": {
                    "title": "Haris Li: A Life",
                    "description": null,
                    "exhibitionType": ["Solo"],
                    "group": [],
                    "venue": ["NGV"]
                },
                "dataAndPlace": {
                    "startDate": "2017",
                    "startPrecision": "Exact",
                    "startApproximate": null,
                    "endDate": null,
                    "endPrecision": null,
                    "endApproximate": null,
                    "place": "200 St Kilda Rd, Southbank VIC 3006, Australia",
                    "location": { "lat": -37.822594, "lon": 144.968928 }
                },
                "website": "https://www.ngv.vic.gov.au/",
                "person": []
            }
        }
    },
    {
        "id": "29",
        "type": "exhibition",
        "color": "orange",
        "url": "/exhibition/performance-artists-melbourne",
        "src": {
            "entryData": {
                "project": "Creative Women: Southeast Asia",
                "dateEntryCreated": "2023-05-23",
                "dataSource": ["Isobel Andrews"]
            },
            "exhibitionInformation": {
                "basicInformation": {
                    "title": "Performance Artists Melbourne",
                    "description": "Description",
                    "exhibitionType": ["Group"],
                    "group": ["Performance Artists Australia"],
                    "venue": ["NGV"]
                },
                "dataAndPlace": {
                    "startDate": "2019",
                    "startPrecision": "This year",
                    "startApproximate": null,
                    "endDate": "2020",
                    "endPrecision": "This month",
                    "endApproximate": "1",
                    "place": "180 St Kilda Rd, St Kilda VIC 3006, Australia",
                    "location": { "lat": -37.822794, "lon": 144.968859 }
                },
                "website": "http://example.com",
                "person": []
            }
        }
    },
    {
        "id": "10",
        "type": "person",
        "color": "blue",
        "url": "/person/john-doe",
        "src": {
            "entryData": {
                "project": "Creative Women: Southeast Asia",
                "dateEntryCreated": "2023-05-02",
                "relationshipToSubject": "Biographer",
                "dataSource": ["12"]
            },
            "biographicalData": {
                "name": {
                    "name": {
                        "title": "Mr",
                        "givenName": "John",
                        "familyName": "Doe",
                        "note": null
                    },
                    "alsoKnownAs": {
                        "title": "Mr",
                        "givenName": "Doe2",
                        "familyName": "John",
                        "note": null
                    }
                },
                "roles": {
                    "roles": [
                        { "broadRole": "Architect", "detailedRole": "Sculptor" },
                        { "broadRole": "Designer", "detailedRole": "Printmaker" },
                        { "broadRole": "Maker", "detailedRole": "Digital Artist/Designer" }
                    ],
                    "otherOccupations": []
                },
                "originAndIdentity": {
                    "birth": {
                        "date": "2023-05-05",
                        "precision": "Exact",
                        "approximate": "1",
                        "place": "gwgre",
                        "location": { "lat": -33.831853, "lon": 151.085898 },
                        "note": null
                    },
                    "death": {
                        "date": "2023-05-12",
                        "precision": "This century",
                        "approximate": "1",
                        "place": "hrt",
                        "location": null,
                        "burialPlace": null
                    },
                    "gender": "Male",
                    "pronouns": "They/them",
                    "sexuality": "ger",
                    "culturalHeritage": ["gregre"],
                    "languageSpokenAtHome": [
                        { "languageDialect": "English", "other": null },
                        { "languageDialect": "Geerman", "other": null },
                        { "languageDialect": "Japanese", "other": null }
                    ],
                    "languageSpoken": [
                        { "languageDialect": null, "other": null },
                        { "languageDialect": null, "other": null },
                        { "languageDialect": null, "other": null }
                    ],
                    "languegeKnows": [
                        { "languageDialect": "Geerman", "other": null },
                        { "languageDialect": "English", "other": "4324" },
                        { "languageDialect": "Geerman", "other": "gerger" }
                    ],
                    "nationality": ["Australian", "Thai"],
                    "socialPositionSelf": "Law enforcement",
                    "socialPositionFamily": "Judge",
                    "religion": "Baptist",
                    "familiy": [
                        {
                            "naturalRelationship": "life partner of",
                            "socialPosition": "Royalty",
                            "Note": "fwef"
                        }
                    ]
                },
                "activityMobility": {
                    "periodActive": [
                        {
                            "startDate": "1900",
                            "startPrecision": "Exact",
                            "startApproximate": "1",
                            "endDate": "2003",
                            "endPrecision": "This year",
                            "endApproximate": "0",
                            "place": "42",
                            "location": { "lat": 4.905669, "lon": 6.297781 }
                        },
                        {
                            "startDate": "2001",
                            "startPrecision": "This century",
                            "startApproximate": null,
                            "endDate": null,
                            "endPrecision": null,
                            "endApproximate": null,
                            "place": "gwg",
                            "location": { "lat": 21.999602, "lon": 103.44204 }
                        }
                    ],
                    "periodDisruption": [
                        {
                            "startDate": "1900",
                            "startPrecision": "This century",
                            "startApproximate": null,
                            "endDate": "2001",
                            "endPrecision": null,
                            "endApproximate": "0",
                            "naturaDistuption": "Not exhibiting",
                            "reason": "Financial",
                            "other": null
                        }
                    ],
                    "placeResidence": [
                        {
                            "startDate": "2021",
                            "startPrecision": "This century",
                            "startApproximate": "1",
                            "endDate": null,
                            "endPrecision": null,
                            "endApproximate": null,
                            "place": "gre",
                            "location": { "lat": 2.554783, "lon": 11.409039 },
                            "note": null
                        },
                        {
                            "startDate": "1990",
                            "startPrecision": "This century",
                            "startApproximate": "1",
                            "endDate": "2023",
                            "endPrecision": "Exact",
                            "endApproximate": "1",
                            "place": "hrth",
                            "location": { "lat": 7.415204, "lon": -0.331884 },
                            "note": null
                        }
                    ],
                    "trainingStudy": [
                        {
                            "selfTrained": false,
                            "student": true,
                            "discIplineMedium": null,
                            "couseName": "4234",
                            "qualification": "No",
                            "startDate": "1900",
                            "startPrecision": "Exact",
                            "startApproximate": "1",
                            "endDate": null,
                            "endPrecision": null,
                            "endApproximate": null,
                            "place": null,
                            "location": { "lat": -33.831853, "lon": 151.085898 }
                        },
                        {
                            "selfTrained": true,
                            "student": false,
                            "discIplineMedium": "gw",
                            "couseName": "gew",
                            "qualification": null,
                            "startDate": null,
                            "startPrecision": null,
                            "startApproximate": null,
                            "endDate": null,
                            "endPrecision": null,
                            "endApproximate": null,
                            "place": null,
                            "location": { "lat": -33.867441, "lon": 151.105938 }
                        }
                    ]
                }
            },
            "practiceHistory": {
                "professionalInformation": {
                    "agentName": "gergre",
                    "agentPlace": null,
                    "agentLocation": null,
                    "artiseWebsite": null,
                    "artiseEmail": null
                },
                "groupSocietyAssociation": [
                    {
                        "name": "grege",
                        "naturalRelationship": "Commissioned by",
                        "place": null
                    }
                ],
                "collections": [
                    {
                        "name": "gerg",
                        "naturalRelationship": "Collected in",
                        "place": null
                    }
                ],
                "recognitions": [
                    { "name": "ger", "naturalRelationship": "Received", "place": null },
                    {
                        "name": "treter",
                        "naturalRelationship": "Reviewer of",
                        "place": "test"
                    }
                ],
                "publications": [
                    {
                        "name": "mufeng niu",
                        "naturalRelationship": "influenced by",
                        "place": null
                    }
                ],
                "exhibitions": [
                    { "node": "Test Exhibition 2", "naturalRelationship": "Contains" }
                ]
            }
        }
    },
    {
        "id": "17",
        "type": "person",
        "color": "blue",
        "url": "/person/jane-smith",
        "src": {
            "entryData": {
                "project": "Creative Women: Southeast Asia",
                "dateEntryCreated": "2023-05-17",
                "relationshipToSubject": "Unrelated",
                "dataSource": ["Isobel Andrews"]
            },
            "biographicalData": {
                "name": {
                    "name": {
                        "title": "Ms",
                        "givenName": "Jane",
                        "familyName": "Smith",
                        "note": "Birth name"
                    },
                    "alsoKnownAs": {
                        "title": "Lady",
                        "givenName": "Artist",
                        "familyName": "Art",
                        "note": "Performance name"
                    }
                },
                "roles": {
                    "roles": [
                        { "broadRole": "Artist", "detailedRole": "Performance Artist" }
                    ],
                    "otherOccupations": [
                        {
                            "occupationType": null,
                            "startDate": "2019",
                            "endDate": "2023",
                            "startApproximate": null,
                            "jobTitle": "Banker",
                            "location": null,
                            "place": "Melbourne",
                            "startPrecision": "Exact",
                            "endPrecision": "Exact",
                            "endApproximate": "0"
                        }
                    ]
                },
                "originAndIdentity": {
                    "birth": {
                        "date": "1996-11-14",
                        "precision": "Exact",
                        "approximate": "1",
                        "place": "Sydney",
                        "location": { "lat": -33.859793, "lon": 151.045566 },
                        "note": "Exact location unknown"
                    },
                    "death": {
                        "date": "2023-05-04",
                        "precision": "Exact",
                        "approximate": null,
                        "place": "Melbourne",
                        "location": { "lat": -33.859793, "lon": 151.045566 },
                        "burialPlace": "Melbourne General Cemetery"
                    },
                    "gender": "unknown",
                    "pronouns": "She/her",
                    "sexuality": "Bisexual",
                    "culturalHeritage": ["Anglo-Australian"],
                    "languageSpokenAtHome": [
                        { "languageDialect": null, "other": "Mandarin" }
                    ],
                    "languageSpoken": [{ "languageDialect": "English", "other": null }],
                    "languegeKnows": [],
                    "nationality": [
                        "Cayman Islander",
                        "Citizen of the Dominican Republic"
                    ],
                    "socialPositionSelf": "Middle class",
                    "socialPositionFamily": "Middle class",
                    "religion": null,
                    "familiy": [
                        {
                            "naturalRelationship": "child of",
                            "socialPosition": "Middle class",
                            "Note": "John Dow"
                        },
                        {
                            "naturalRelationship": "friend of",
                            "socialPosition": "Politician",
                            "Note": "Anthony Albanese"
                        }
                    ]
                },
                "activityMobility": {
                    "periodActive": [
                        {
                            "startDate": "2010",
                            "startPrecision": "This century",
                            "startApproximate": "1",
                            "endDate": "2023",
                            "endPrecision": "Exact",
                            "endApproximate": "0",
                            "place": "Footscray, Melbourne",
                            "location": { "lat": -37.999437, "lon": 145.327188 }
                        }
                    ],
                    "periodDisruption": [
                        {
                            "startDate": "2015",
                            "startPrecision": "Exact",
                            "startApproximate": null,
                            "endDate": "2016",
                            "endPrecision": "Exact",
                            "endApproximate": "0",
                            "naturaDistuption": null,
                            "reason": "Health",
                            "other": null
                        }
                    ],
                    "placeResidence": [
                        {
                            "startDate": "2019",
                            "startPrecision": "Exact",
                            "startApproximate": null,
                            "endDate": "2021",
                            "endPrecision": "Exact",
                            "endApproximate": "1",
                            "place": "Leichhardt, Sydney",
                            "location": { "lat": -33.881754, "lon": 151.156372 },
                            "note": "Exact location unknown"
                        },
                        {
                            "startDate": "2021",
                            "startPrecision": "Exact",
                            "startApproximate": "1",
                            "endDate": "2023",
                            "endPrecision": "This year",
                            "endApproximate": "1",
                            "place": "Thornleigh, Sydney",
                            "location": { "lat": -33.715742, "lon": 151.086008 },
                            "note": null
                        }
                    ],
                    "trainingStudy": [
                        {
                            "selfTrained": true,
                            "student": false,
                            "discIplineMedium": "Performance",
                            "couseName": null,
                            "qualification": null,
                            "startDate": "2008",
                            "startPrecision": null,
                            "startApproximate": "1",
                            "endDate": "2013",
                            "endPrecision": null,
                            "endApproximate": "1",
                            "place": "Hornsby, Sydney",
                            "location": { "lat": -33.711969, "lon": 151.104846 }
                        }
                    ]
                }
            },
            "practiceHistory": {
                "professionalInformation": {
                    "agentName": "Agent Bob",
                    "agentPlace": "New York",
                    "agentLocation": "POINT (-73.989491 40.728755)",
                    "artiseWebsite": "https://gert.staging.performx.com.au/person/lola-greeno",
                    "artiseEmail": null
                },
                "groupSocietyAssociation": [
                    {
                        "name": "Performance Artists Australia",
                        "naturalRelationship": "Member of",
                        "place": "Melbourne"
                    }
                ],
                "collections": [
                    {
                        "name": "hergre",
                        "naturalRelationship": "Collected in",
                        "place": "greg"
                    }
                ],
                "recognitions": [
                    {
                        "name": "mufeng niu",
                        "naturalRelationship": "Received",
                        "place": "Australia"
                    }
                ],
                "publications": [
                    {
                        "name": "Performance Artists Weekly",
                        "naturalRelationship": "descendant of",
                        "place": "Melbourne"
                    }
                ],
                "exhibitions": [
                    { "node": "Test Exhibition", "naturalRelationship": "Is part of" },
                    { "node": "Test Exhibition 2", "naturalRelationship": "Is part of" }
                ]
            }
        }
    }
]
