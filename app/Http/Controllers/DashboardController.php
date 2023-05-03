<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('08FBE9124397C062AAQAAAAXAAAABJAAAACABAAAAAAAAAD/Nnvcz3RG/S3jOHq/mCiK5GJh37Dd9sAHK2mQ4XXU4mmITLsiYFGWEqaTfW5mYt1r7K59A4NzPdA564Wn4KooO6sdpMCEFz3N/kP89GPYL9Er8MapCJjP6dA5lRqJBEGdg1dF364CVUwNE8WWvcQBiUawnxG0ifnbvhqBM4yJZnInlPdB6+bKsSeupnLrGDKFUQAAAIAHAAAjZFd/hehllJO6vnqrX8HHPq5cVUYJQHZTz9YKHTEtdZ2EEQQcMCgULEWwJqeolzlQh4bdj0q+IEFMCNIFmS7dqfIjQ89g/Su8ffcjSPPiqzBescS3Lrlytm0YQ//rnBpZSVv1VDI81v0TQq58F11SGlMf9Qk4H/DztvZ2IUCfjFlrmCmYrCd2Vn7r+XVUF8kPjbmFTTtBkM4jJQHLCqzPvT86qzVKN4hKN4QXmt52Eqf85GX6cJukq55D+roORYFl++WxdpSgtgWIMXKCr29R87pgdArOyk43Lys7uItqfJH5du86JidfcBIHrK5k0YLkweCDq1cQKXyte2vKrIGzNhzKyiqmMiHnaj6+gEpjXLLVXOvjN7Z91yX66qidbFC6CTAc6uCIPkGvAzqIxO5x1rBLoLwcdA88a6pBiVZ/eOCUtaWXMBcm317jy0lrCSTbEcfrHP2BwmCK8DXOvx/DPM1LgtOWwLwhtDKFNtSwD8t032wUaTQd13dkM0B26A8cfhox1fDpTp/FAXfaP8oztgDIOdv3sIzSGBsPJWtZTeolcjxEdBFHRAwUAA+yx9F/HPjbAiKSekqZE3y9kDtonKi6wSKgt5sX41vZgVqFuqCWRIHEauAMtsKI+LIrjiF60sVYNnJRBsVPJXb6V9h7zFasEbUV32cS7MdYFus7m7Zq+LiiIhlS5eV46Qpk2B0CU7qwFnBF5QaPs4QWfpb80SQsVneRPSvgJdIsZ9m2qElbJeMO8uXH8JbRAAGW22r0a45EEreujS52fMHf8rdU6H99NNOcFfzkROyw2YaEszfHfBU73wbjbfJWyYPlSFIotxcPgY3DnB8OpXRtMOp9FzyLXmfkgU6IF1mHfw7rb1//j/96BDv6TH4glMGLtWNDAxKt2EQLQaZfayM9P1jJMZ7XORnSECuOfjAIWt6UDcwjdb1wI4PeBm4v26jmTuttQL/IBsTGlK9qj8RQUhFohLVcxK/MLsZ6W8Kh+N1cR6sEHYdoYyY62qehagXYmjFJhtW5yMRlQfllvORTlVQioG2ShajFM1xXWDusmDy/Nq2zKBV/8AvzJ5CXQ7j975C9e4JQtHnrp95BtJfgDxWi2iNTJ3hlf9keZ5c52zrTRio3ue/4d7eXCH9HEhDuOOJlsBqs+qjy9+7TdBcPVL7kTiy9fG5GdFO4H8Y0U548y/nHL8wY+oOSDQp50KOdDABw1PGtoJ4xr3p0fSSgSbJKa5bui2r9yIdiZYkEb2JpMeMe6D+sVuMQDjkl14xOgJI0YTsYTWUP+W2Zewt+LugnixGCbmuFjTNWZ63SVeEwv1blO4Uc4t8jEwaAMg8G5uQT8qIvCN0PfarwejdUt2t1043U+tWfBFmtb1200YU2WcYUyIdDnoUM0xNWoSOm+nq/5P91tV6MhrqsS8PURrgs25IOnQGNFQGiTuAydqgPqo7OIrmc+LOulAukyqqxZuzM9/VSgaDm1qqkDuuYTtHsTDMhHG/AN6w1tGqXpt9GywvH1OIlkiM8OxKCN40odf/2LVwuL8sIRmLWPkNzvUcNkhyQw9lHBQ5whihWk2Kt5rxtxT4bZntWhLQBzGFHlEj57SGU1ByKQrn2gpzQFFdhuOb4uV05vWUpt/YRIXoAHeAvstbf6XT9gG7IpzIk6jashm/d5d5K+1MNfMFeB3lmr4dyaGuxfxpAiYMk2HVrdyAGLRGxlDT+ffkmALcPqyW2Sn/P6MqY0wdp+gQz9eD8JFEaQLXeLAIKBKgC9gwE7HjhlArGWd0O47cx7EAhH4JKSeDcKbS8p9WHWHNveOwHj/3mMrXu7PPCpKv2D2ozFISijZ7POOH9Mm3y6SWw84fJnWu0V+URPhhDQOb24IDVO5AxJ+oyZ96Nepv324bsdtGVzrIZTOpHPSeXLZorJ1iRpdFt9iOEf61ulHaBAqV+xY5F1ZitGxUh/hgP5kYmyL7E2IjsSPvhXlnSAgEoPo0GN+fjymy4wBz0OU0bwbwTBuQc3leAgB45QpT5ZC3mH7w/pVRyX5cI8dDAfqlawczh5SBQl54zokbf1y5YaaWcpWY1RG5MZJGjZQ/sdBf0Xa9x9PPRNGKVtFS+zEL/N5iJaHD+6FErH88DPwuQNW6UBMG4+y/1LOr38aHItgS0f2NJMk64EV4axskkXK9jXWahs+Yg9HYQbjWeJeOoWsE1Z+M/u13KmWEf7Yt+LV+JJB749TgTULRRBYxSX38ljWlUEvr+yo4YswK8upyv0ZEf/SbuXUEunIdssX+8OZX8BFMDJ1niKdpCo0Yr2BoJv+F8Tz4BF0ydYMghGxzCYrUkaodO+54JoYY5shT+GMPT6qJgtfXOiLkicJCF+Cbzd/yGR+6+3QGZtBSYGXlb9uE8wc4zYVdxi71cuqGadu/VU1pglUv7/Gtr4P0vrf4/AVUEU68P6ytAE8rvjkf+lpMYqr8+LDwLIibx51a8UJMVIl/NGD0X4zRYKYVTyiEDO4VVngMbcQf5mhQP8tnvisenmchyIz4xy5snFevb36nzfDvJ73LOsQYLZci5VIKrdQIAAAAA');