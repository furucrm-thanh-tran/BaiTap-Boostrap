var i, j, menuNav;
x = "";
menuNav = [{
        "href": "#",
        "text": "Category",
        "items": [{
                "href": "#",
                "text": "Mobile",
                "items": [{
                        "href": "#",
                        "text": "Apple"
                    },
                    {
                        "href": "#",
                        "text": "Samsung"
                    },
                    {
                        "href": "#",
                        "text": "Oppo"
                    }
                ]
            },
            {
                "href": "#",
                "text": "Tablet"
            },
            {
                "href": "#",
                "text": "Laptop",
                "items": [{
                        "href": "#",
                        "text": "13 inch",
                        "items": [{
                                "href": "#",
                                "text": "Apple"
                            },
                            {
                                "href": "#",
                                "text": "Samsung"
                            },
                            {
                                "href": "#",
                                "text": "Asus"
                            }
                        ]
                    },
                    {
                        "href": "#",
                        "text": "15 inch"
                    }
                ]
            },
        ]
    },
    {
        "href": "#",
        "text": "About Us"
    },
    {
        "href": "#",
        "text": "Contact Us"
    }
];


function Menu1() {
    for (i in menuNav) {
        if (!jQuery.isEmptyObject(menuNav[i].items)) {
            x += '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="' + menuNav[i].href + '" data-toggle="dropdown">' + menuNav[i].text + '</a>' + Menu2(menuNav[i]) + '</li>';
        } else {
            x += '<li class="nav-item"><a class="nav-link" href="' + menuNav[i].href + '">' + menuNav[i].text + "</a></li>";
        }
        $("#show").html(x);
    }
};

function Menu2(miniObj) {
    y = '<ul class="dropdown-menu">';
    for (j in miniObj.items) {
        if (!jQuery.isEmptyObject(miniObj.items[j].items)) {
            y += '<li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="' + miniObj.items[j].href + '">' + miniObj.items[j].text + '</a>' + Menu2(miniObj.items[j]) + '</li>';

        } else {
            y += '<li><a class="dropdown-item" href="' + miniObj.items[j].href + '">' + miniObj.items[j].text + '</a></li>';
        }
    }
    y += '</ul>';
    return y;
}