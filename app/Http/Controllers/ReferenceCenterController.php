<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('08FBE9124397C062AAQAAAAXAAAABJAAAACABAAAAAAAAAD/sqGiWsYilci4TODbatDixIv/bFvWdMSezxAUJXq3u2Wz3172Tze56vEONeBV4fL29ETJSFElro/0qYmxQm7eU05tlqRZ9mO6rnqzb7ZovE4h46lYycJGaf8yDME0W7gFwGqHdBUNJH5ZqVO/gK3w1sP0Mk/Z+lcQvnsdwFJNdkfVAn7SnMoKEwG6ug6xl6QVUQAAAHAKAABTm4UACumk7jMdvTfqXnQRzT9YcNS8hXu08hw2fEtBTTCzIF1imvronT2OdAcrVSs9T6KvzSvLgckiyaC3tAmleYDgmDkpLF5xiPeLjApo/yXw92tXIk63AW995auzBjgRGebxhxO0hpDOf/Canzm9RzTZ+dXDKp1GO1Y6jSMsYD1ssuu9pM2Rkln6n87yRBohBwS9/KIx0CukXSktSqTYqOeR40EiaWOTsvRzXPWT+V/vLlSMogHwLyu5zMMcY0zmQf2cP1PgbpoCM22wqmH0WtMRgb1B7gwSsjMwu6koE7acblpBmlKYtn3znJUvFWyfvIRmZyj4sJo+g/7jvuIC62LrpcjIPAlxn2S0Ed7qXGJ4DA3REpzluVa6OTNul95MQnFoJBVOdx3qRFDX0Hgh+GussPHJfCn1RAA6lRhMzlG7AX61V5Sv9ulk0EUFzxahL1vd0ew2vkx5NXloYt6BV1+noO4PmK4WVbVZo+dO7Cq3OayfgA2Ze51jYnEdwFwTY/SoxAPfaP5M9pw2h1vdWDMfk38bbrZ7dbqKlsb2yVmgwwYy+lx2wZPwa8Pf0wJCVZvUdkHRuMwzJLYF8Tn+lbKOO/Vb1XEKLu/lBXHI+9BhHliX6n92nvZrEs4aSsB4djIIcYptF1NM8gauVXJK/qTv3jNzy61VaziejlORoZYQS7YVg9H5y7dX/7CQtW0oHJ9Ng6YIxNlE/pv3lsSmk1IFvOtt9grBTNdU1kQsGgHVTVzrvat3HcEbfr9DUKUI7HsVGvyICM26+VV9eSQYEn9NOeGNHdB1g+C5H/GFk6BXmzkHGu1P/KdN5sWIpgrZTyuRyeJkKhapUltiGnIjHSanRtmFVpbgjYBZzaXq7Uu/9JJuJJ1l4NmZDa11Csco5iCuMaTa1Qx71yhytqItkD4pibShN4d0bNzjQY6EfZXHqT6HF1Liv8vZirLL4toEW6R+oA7KmIDpL5d5Rfp2bQUoMMx5K5bXx40xkXVn75Ugh+UDCbiyrYQQXFuaOLPopQYxvkkuW7MyD/HboqaYWCMPmXFx1/xJGkIfbgoUEhsprjme2s9Qu9IN0+U/nlCHVL3TUjBpzmk5w4JtjRwrdNtZYQJPLSm0S/lapn7Y8XYZ7YqWNdzMMdQDqOQHEhO4ySvmhyxzExeln28AbnOkOdkzquuAMrANQYlW2uuypw5WaRUtIn0WamlpNQTx7brYpwmjpj282DJGow/t8/TI5qzZleAat5YU0M8TjgBaWbxx3r2AFyg+/DkEML78S8kxy6tzrI/2w++8ZZcfUubFQB3Ysegl+sg2m00uya6uQ7U7ScUiThBH0MPm+gJ9CzFPu0SvAkVmHO0XO8OPZRdiiA4IM3t6kLG23aufmL3zvFRrxINKaXKpz5Vb8kWqPKKEXOeCHB7AVrijc51FxgeolXYvJ4Jci0bUJ3lw0Bf0PulXx988E6cg+FKsj9l/yU1ri7/HCQQ07e/eG769ibO8HFGBDlGhUFdwLlNDZcB7BDlqwHiPr3aPtAVynOcnCLkTEunKrxOUhB+yCee9lqs+tq4qojpS0AWWCoC/4Ra3wJ7UvLoUzD6DFTLXNZ+PR+oVAN8WPSfKXKW9VhZG+HvzjDW87na+gp01dYhw4wHSX5cNbu7iBQxwBEs75mo4pxNWGQsPVtWWgTLP0cnpQ0UwGbkKRfFcuJkX/oJwhpRfroBj5wmJZXSDxsGVdRgf5NiZcOv8ciJluPRM61s7Btx14282WRA0hdrPvBqma9+lJfMLSOZ5o8SgqnvUNt4afdXgWWYEN+bhcxLc42E1/WfJviJ1omdAXxmmocBX/xZqORizwHrWBn+vvqRCCD/+YjqR5OzzbG6uPVewuMkt+mt2utwARjBdjTwmlFPigLq0teqxEJ/ZD1N7Ijo/qa3qKAoy4lW/ZMuhbC2XgXbFVCb6Q+EOqML2cSX5UXyRAEQuoRfVyJ9FEHHB5i47cho1+xzgxMlkf7f2GLQB/C8BwTLkdgau2Uldsg6AaQhc87UkU9LftkreB9xuT9+eTbE8+9qyWUIe+fUVk5iDXwAnBzTNteeZovPOfi0iT0TzbOHNvU+ZRIOUCPo5d8RdDLjVS6ld+vY7QfCDh5jTgXgtgvvnk/q4DPlIVjrOdJ/t06+COG8+H76TJCBP0VcM3r7xCJ6b9MyNWg9XHMtht76CzjCrYF1V/rlmnRvLyAmfbNvTL6ruhfVCysvYs1M34bV7W629wvhePSMfvs/IgYIGpGrMChRuVDtlR1UEweHhW+eau32484XsKmEwgp1ILrRTWUxjai2RglnRojSbFKCzGil5iLKzwGoC1RioxQPNWgJGWhdT8ntVcV4KUQlamYJgcP2SEAHahxU2SFIZBAOvguZnX8muKqI3WgnD1zxjwLaNpC2hsSlmcb279M3eeDjqJQR/yvTaRd6igZ4k9KKT676l82tI7wuXuIk0bRKOuRZSXppx8Cb4SEdyc+M0dJl1mHy/6RMMegvnp1CeYosRzHcVN47KdCmDhVL4FrahRSP1xVnetEn9WMu2z5KAeJdRPEd4gDg6JNTZnMOuKgGxv2a7Z2bfSbqe7ll2abqRuSRAPnR4rVeSB5tYoMH/CWVxFzhGVLO6U8Urw7IFXoF5fMXUvgDdGDTbRKnyLzXGfv7w4xkIWqWP/9s93ODZfwCLg7JwcFsOGih8eOUQTvd7mND+jJzBrsH5jV5mMt0mgn9UJjL8mVxLvBbMu8EueHjpWy/kRbZ4LgRqyeOM1cgzMljIaQY5iXEm08EWhRPGJgvGekNpSoNEvZms9AM3Ygg4Q8FL9xYfGM+TPKVCeZIsFkMU0VoZ+MRoIAKaFy3Lc23kQOBbo/WuT2EGUBqgpdhgPjMZbHyd4lExwt4o1lEunW06BNeLzYqI0i6IU/NLmuuK1a+WTuc+mvnEYMkAmSq1r8r/sylKdzA1NEPHRYLAXozHAn5hI98n31G9Ud242bJGeLP2XLMtKD2iAWXtxMnrw1IA13TEKfWMhf4uLmMidlmw8MX/itI6jat5O+GqqS2vcX/bQgcjwFLaxURcyoRyzTglE8GuwiPxdndY/mDRJb5/nzQBgry/6FmuhvsdWsfJgugCe2KfKeEDisjFwzlcPMDOxTys8NzzVGj/jRjtcvBkCHaP7NF5XTKwC6Zxt0g6a5EoLFrH7FsTb2a4vDwh3dMFwu1NNBSa7R7pHbB59LW0SgcjWGLdDT0u0Vh8gK7mx3WdRmoR5dwkZM5euROmmUpEPWwhCg6c/6dpD8bSUf8dG1/1SDpgTAsG8TPoKzDJ6wSYwTuJhQsBbgLdp+oZJCYBJGHR9gIet3Ndb8+JHNjKyW+wt2NdnHaqMdOZXHDmUMsfddnqtqBSsET2wnqaijvsfLXf2tDEmteQSe2leZVgAeqmjJ+wbc2GnIWqbrnrs3fn6dSAGhOjTndiX0GR1xOJs13ee1Np/a9PJrqxTWI6Ucm46eUbYKoi6JZfxmhmAGR1bHqBHVZ6lutkWZyKO2U2xKP7T0dlCbE6zjbc1bKH5qbQeliAqGjp12sYV5WrFwAAAAA=');
