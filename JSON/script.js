
var jsonData = [
    // {
    //     "course_id": 1,
    //     "course_name": "MCO1",
    //     "items": [
    //         {
    //             "subject_id": 1,
    //             "subject_name": "Data Transfer Language",
    //             "items": [
    //                 {
    //                     "module_id": 1,
    //                     "module_name": "Data Transfer Language",
    //                     "items": [
    //                         {
    //                             "chapter_id": 1,
    //                             "chapter_name": "Apache Avro",
    //                             "items": [
    //                                 {
    //                                     "topic_id": 1,
    //                                     "topic_name": "Apache Avro\\r1"
    //                                 }
    //                             ]
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     "course_id": 1,
    //     "course_name": "MCO2",
    //     "items": [
    //         {
    //             "subject_id": 1,
    //             "subject_name": "Data Transfer Language",
    //             "items": [
    //                 {
    //                     "module_id": 1,
    //                     "module_name": "Data Transfer Language",
    //                     "items": [
    //                         {
    //                             "chapter_id": 2,
    //                             "chapter_name": "Apache Avro",
    //                             "items": [
    //                                 {
    //                                     "topic_id": 2,
    //                                     "topic_name": "Apache Avro\\r2"
    //                                 }
    //                             ]
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    {
        "course_id": 1,
        "course_name": "MCO3",
        "items": [
            {
                "subject_id": 1,
                "subject_name": "Data Transfer Language",
                "items": [
                    {
                        "module_id": 1,
                        "module_name": "MCO",
                        "items": [
                            {
                                "chapter_id": 3,
                                "chapter_name": "Groovey Scripting",
                                "items": [
                                    {
                                        "topic_id": 1,
                                        "topic_name": "Groovey Scripting\\r3"
                                    },
                                    {
                                        "topic_id": 2,
                                        "topic_name": "Groovey Scripting\\r3"
                                    },
                                    {
                                        "topic_id": 3,
                                        "topic_name": "Groovey Scripting\\r3"
                                    },
                                    {
                                        "topic_id": 4,
                                        "topic_name": "Groovey Scripting\\r3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "course_id": 1,
        "course_name": "MCO3",
        "items": [
            {
                "subject_id": 1,
                "subject_name": "Data Transfer Language",
                "items": [
                    {
                        "module_id": 1,
                        "module_name": "MCO",
                        "items": [
                            {
                                "chapter_id": 3,
                                "chapter_name": "Groovey Scripting",
                                "items": [
                                    {
                                        "topic_id": 1,
                                        "topic_name": "Groovey Scripting\\r3"
                                    },
                                    {
                                        "topic_id": 2,
                                        "topic_name": "Groovey Scripting\\r3"
                                    },
                                    {
                                        "topic_id": 3,
                                        "topic_name": "Groovey Scripting\\r3"
                                    },
                                    {
                                        "topic_id": 4,
                                        "topic_name": "Groovey Scripting\\r3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "course_id": 1,
        "course_name": "MCO3",
        "items": [
            {
                "subject_id": 1,
                "subject_name": "Data Transfer Language",
                "items": [
                    {
                        "module_id": 1,
                        "module_name": "MCO",
                        "items": [
                            {
                                "chapter_id": 3,
                                "chapter_name": "Groovey Scripting",
                                "items": [
                                    {
                                        "topic_id": 1,
                                        "topic_name": "Groovey Scripting\\r3"
                                    },
                                    {
                                        "topic_id": 2,
                                        "topic_name": "Groovey Scripting\\r3"
                                    },
                                    {
                                        "topic_id": 3,
                                        "topic_name": "Groovey Scripting\\r3"
                                    },
                                    {
                                        "topic_id": 4,
                                        "topic_name": "Groovey Scripting\\r3"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]


// $.getJSON('input1.json', function (jsonData) {
//     for (var i in jsonData) {
//         var row = `<tr>
//         <td>${jsonData[i].course_id}</td>
//         <td>${jsonData[i].subject_id}</td>
//         <td>${jsonData[i].module_id}</td>
//         <td>${jsonData[i].chapter_id}</td>
//         <td>${jsonData[i].topic_id}</td>
//         <td>${jsonData[i].course_name}</td>
//         <td>${jsonData[i].subject_name}</td>
//         <td>${jsonData[i].module_name}</td>
//         <td>${jsonData[i].chapter_name}</td>
//         <td>${jsonData[i].topic_name}</td>
//         </tr>`;
//         var table = $('#table_body');
//         table.append(row);


//     }
// });


for (var i = 0; i < jsonData.length; i++) {
    var course = jsonData[i];
    // console.log(jsonData);
    // console.log("course ID:", course.course_id);
    // console.log("course Name:", course.course_name);
    for (var j = 0; j < course.items.length; j++) {
        var subject = course.items[j];
        for (var k = 0; k < subject.items.length; k++) {
            var module = subject.items[k];
            // console.log(subject.items);
            for (var l = 0; l < module.items.length; l++) {
                var chapter = module.items[l];
                // "items": [
                var items = $("<h2>").text("items:");
                $(".container").append(items);
                for (var m = 0; m < chapter.items.length; m++) {

                    var topic = chapter.items[m];
                    console.log("Topic ID:", topic.topic_id);
                    console.log("Topic Name:", topic.topic_name);

                    // "items": [
                    //     {
                    //         "topic_id": 3,
                    //         "topic_name": "Groovey Scripting\\r3"
                    //     },
                    //     {
                    //         "topic_id": 3,
                    //         "topic_name": "Groovey Scripting\\r3"
                    //     },
                    //     {
                    //         "topic_id": 3,
                    //         "topic_name": "Groovey Scripting\\r3"
                    //     },
                    //     {
                    //         "topic_id": 3,
                    //         "topic_name": "Groovey Scripting\\r3"
                    //     }
                    // ]

                    $(".container").append(" <h2>{ <h2/>");
                    var topic_id = $("<h2>").text(" topic_id: " + topic.topic_id + ",");
                    var topic_name = $("<h2>").text("topic_name: \"" + topic.topic_name + "\"");
                    $(".container").append(topic_id);
                    $(".container").append(topic_name);
                    $(".container").append("<h2>},<h2/>");



                    // $(".text").text("Topic ID: " + topic.topic_id);
                    // $(".text2").text("Topic name: " + topic.topic_name);
                }
            }
        }
    }
}
