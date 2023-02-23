
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

var jsonData = [
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
                                "chapter_id": 1,
                                "chapter_name": "Groovey Scripting 1",
                                "items": [
                                    {
                                        "topic_id": 1,
                                        "topic_name": "Groovey Scripting\\r1"
                                    },
                                    {
                                        "topic_id": 2,
                                        "topic_name": "Groovey Scripting\\r2"
                                    },
                                    {
                                        "topic_id": 3,
                                        "topic_name": "Groovey Scripting\\r3"
                                    },
                                    {
                                        "topic_id": 4,
                                        "topic_name": "Groovey Scripting\\r4"
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
                                "chapter_id": 2,
                                "chapter_name": "Groovey Scripting 2",
                                "items": [
                                    {
                                        "topic_id": 1,
                                        "topic_name": "Groovey Scripting\\r1"
                                    },
                                    {
                                        "topic_id": 2,
                                        "topic_name": "Groovey Scripting\\r2"
                                    },
                                    {
                                        "topic_id": 3,
                                        "topic_name": "Groovey Scripting\\r3"
                                    },
                                    {
                                        "topic_id": 4,
                                        "topic_name": "Groovey Scripting\\r4"
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
                                "chapter_name": "Groovey Scripting 3",
                                "items": [
                                    {
                                        "topic_id": 1,
                                        "topic_name": "Groovey Scripting\\r 1"
                                    },
                                    {
                                        "topic_id": 2,
                                        "topic_name": "Groovey Scripting\\r 2"
                                    },
                                    {
                                        "topic_id": 3,
                                        "topic_name": "Groovey Scripting\\r 3"
                                    },
                                    {
                                        "topic_id": 4,
                                        "topic_name": "Groovey Scripting\\r 4"
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


for (var i = 0; i < jsonData.length; i++) {
    var course = jsonData[i];

    $(".container").append(" <p>{ </p>");
    var course_id = $("<p>").html("&emsp; course_id: " + course.course_id + ",");
    var course_name = $("<p>").html("&emsp; course_name: \"" + course.course_name + "\"");
    $(".container").append(course_id);
    $(".container").append(course_name);
    var items = $("<p>").html("&emsp; items: [");
    $(".container").append(items);

    for (var j = 0; j < course.items.length; j++) {
        var subject = course.items[j];

        $(".container").append(" <p>" + "&emsp;".repeat(5) + "{</p>");
        var subject_id = $("<p>").html("&emsp;".repeat(7) + "subject_id: " + subject.subject_id + ",");
        var subject_name = $("<p>").html("&emsp;".repeat(7) + " subject_name: \"" + subject.subject_name + "\"");
        $(".container").append(subject_id);
        $(".container").append(subject_name);
        var items = $("<p>").html("&emsp;".repeat(7) + " items: [");
        $(".container").append(items);

        for (var k = 0; k < subject.items.length; k++) {
            var module = subject.items[k];

            $(".container").append("&emsp;".repeat(11) + "<p style='display: inline';>{</p>");
            var module_id = $("<p>").html("&emsp;".repeat(13) + " module_id: " + module.module_id + ",");
            var module_name = $("<p>").html("&emsp;".repeat(13) + " module_name: \"" + module.module_name + "\"");
            $(".container").append(module_id);
            $(".container").append(module_name);
            var items = $("<p>").html("&emsp;".repeat(13) + " items: [");
            $(".container").append(items);

            for (var l = 0; l < module.items.length; l++) {
                var chapter = module.items[l];

                $(".container").append("&emsp;".repeat(17) + "<p style='display: inline';>{ </p>");
                var chapter_id = $("<p>").html("&emsp;".repeat(19) + " chapter_id: " + chapter.chapter_id + ",");
                var chapter_name = $("<p>").html("&emsp;".repeat(19) + " chapter_name: \"" + chapter.chapter_name + "\"");
                $(".container").append(chapter_id);
                $(".container").append(chapter_name);
                var items = $("<p>").html("&emsp;".repeat(19) + " items: [");
                $(".container").append(items);

                for (var m = 0; m < chapter.items.length; m++) {
                    var topic = chapter.items[m];

                    $(".container").append("&emsp;".repeat(23) + "<p style='display: inline';>{</p>");
                    var topic_id = $("<p>").html("&emsp;".repeat(25) + "topic_id: " + topic.topic_id + ",");
                    var topic_name = $("<p>").html("&emsp;".repeat(25) + "topic_name: \"" + topic.topic_name + "\"");
                    $(".container").append(topic_id);
                    $(".container").append(topic_name);
                    $(".container").append("&emsp;".repeat(23) + "<p style='display: inline';>},</p><br/>");

                }

                var items2 = $("<p>").html("&emsp;".repeat(22) + "]");
                $(".container").append(items2);
                $(".container").append("&emsp;".repeat(17) + "<p style='display: inline';>},</p>");
            }
            var items3 = $("<p>").html("&emsp;".repeat(16) + "]");
            $(".container").append(items3);
            $(".container").append("&emsp;".repeat(11) + "<p style='display: inline';>},</p>");
        }
        var items4 = $("<p>").html("&emsp;".repeat(10) + "]");
        $(".container").append(items4);
        $(".container").append("&emsp;".repeat(5) + "<p style='display: inline';>},</p>");
    }
    var items5 = $("<p>").html("&emsp;".repeat(4) + "]");
    $(".container").append(items5);
    $(".container").append("<p style='display: inline';>},</p>");
}
