<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('08FBE9124397C062AAQAAAAXAAAABJAAAACABAAAAAAAAAD/X0kdnPPXHrjTHaCCMeRyn9kMCNMW9nKKBzDC0UsaCna/mDrMcnOoHtQ6qKYZBOvlWShNrlmXWZ3ViI16XmD+2PJ6LKXKZdidqPEVQ55ZZzYKVhojKIWdFntaiNn4Hha+jmQVqNYVd/NRK3y97EXiz3Hpp+AL/JPbbqoo1svl95RQlAntuZbjbLvFE3tfuV1FUQAAAAgGAADRWK7cP9x0ZXzQkAhvitSwlKOj/s8DTqlNC2VlRFpNZ3+Eqt62IMsBYY7yCIha3U9Bh/XZ3rGVT7nHw1S43kOTtGeTwGZF+OTqrS4JMu6Ss90CiSd8r4HMR8BupJkOnsfB3KKmgpjIUDZI2k+YlQxV5b5Zu52VIGnpTUKxXWkodNk5ACSMht/gYKWROnyBJ5LnycKV8+aq2/MtK7Lpt0uHPaA77IaZlRdAAjUmA3c+ExDE8Odb3I0RAzTi8zVXXchhKpihKQw8c/p/7eKNy+hmH/m+0ewTWmtNkJjY14kvHGEFQnxAIzDVmfEIErJHeVR6sl/lorXwkSG6sY0VF/tFmGE91Z/6o32M9qJCJPwDh+Hd4cWfmWe8uofiil3aXTPIQBSY/XqRyUFm2GTQOO0sFK3hChUirQRhVxuftsJqM0TpL2ufzrGObjxmTZwlYT+R+F5dX43XE4uh4OZFntYjl31Ma6vJpxhIlkZ9KSt1L6c36hZ3kUjQa6MUGkn7TFVv72DG+BXRGZ5yU2N2JLVuRAvE9jb20XXBi6lMtZp4GyJxxS83iDI1SGOLFb0aFFIo6de3PH48UJHUYiffERjSql8TXMV3xwsGGvZrOtoNt146bIczoFSgC1wAJT8Oo1jC2pkbXFYfypSPQ0Vaq1GRH6o7AHvN16Xb+w8usRxVKIsVMzKv7LmnWAMs69U+nImW42W0bDj0ZhvhzcZtUaoQm7ZBWW712Kz5y3NZcTEOceUsoeSG8FS9v1oGCZh67EuKnBy5MbQkO1yKMW4+j0vyh8NHYinFpIvltFJGc3t10BSVOuhjJHANt41S5/Y4uYsiMNUWZE9C2kT+DbCRMCAN1BGxw8MCRAP4MllFazIL4H/qxIdMr0OCM4PKHPMvNjyL0zFjZt3PsHXUhDdiPIuJ0gUowNKHNtR3sTR2dlxErBikLOlvjCLYIWGobGcM1QFqLjV9Llsp3e5fC+D+BbpB1VfUG2a08PyOGzdRGMgBsnLJK1qriQSWl38nZHVQjhkijS9PAop62E8q21ZzJ2iDXpDhNEDalqA8vI5xYPfohyGL6tvS0tgBOvoFs2+qNGKWxLo8AGQvWWJ8MGH1nKto/zxxPhniJhuxMfURHUKfHc0HX1X4p4/DaiGzmffF0P99H4V30E6KPbcKmVIJl4wnFM7eDenxLFE8Ax9SRy8F3bgUNOUjF+9rEN6yaJuiLPyOiN1H2nvlBud8rpOkjpS035wpLOg6FHEyfUMiLteBWUawiveQQSzXpfTsAK9DXShBuu75O4R3YhCKG/NA01TZNvLRyjdliXuM4y99ROp8zQnC468WRywUhF3EkeRTjEXGwZpZrh4gAJaunZaDbKqFSZLuE0gArlzhSPBUByAdOeEF0NgKjHBv3uABYNFcSBZBpmtCQ4KoY2Z2dTG6OWRQH9xCNFXFV5tcWPVrEtvshHKcxRUAC2ObTt2GON3JPQJ2scnwVj6LN/LT8QgJ0cMg7cafhx7gNEtg+BuWSORt9UHs6d/IjXLJJ14VULFWA7wDOic9sa8XHwvAda/m5Q7xpZU0PVotL+C/jRV5TZ4JBogUOENFHCRQIqEESOen7ECF3CYO9qz+oPO4wgtKF4vYYreZONYBSB7z2oJRg3Hwf9DAVYedokwhHT5NZZpmQlJUoAi1Ct5FdLHQWFkF2HbQt5pW2WRDFP0YtzFd/O5TgEPEVTxBQGO6AAx3e3l43JRlDNAjv+Wj6BJpok4Qs0kc50BQxBjWocupXiJxhpb4az26dfivFqmmF050+/kMT7Z9zrZZEEjZ3iVNOhp23BATOn2c0Fhs6kapcEjKDwmYhODfaGNQtxNnI0XeIcgUalll3EF/IIAzkHByoP4vXSzqNPld7H1DWegwr9wzNWCDuCRwNZuO23DN5lkQuinn7XZpAifWJAMmUo5VYXdJI7p9R8qQMQxn71bQS8XiaWx9u2vslicoFcyADNWkwpArtCGvGRadaQwpEgkEDoM5yjLEBnKdrP0R5oVUJ/oQ0KJLMWjVIsYwBJQ0PExu4nlryDaHl+RkuSb/KAAAAAA=');
