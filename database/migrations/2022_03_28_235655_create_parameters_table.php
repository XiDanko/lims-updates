<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('08FBE9124397C062AAQAAAAXAAAABJAAAACABAAAAAAAAAD/X0kdnPPXHrjTHaCCMeRyn9kMCNMW9nKKBzDC0UsaCna/mDrMcnOoHtQ6qKYZBOvlWShNrlmXWZ3ViI16XmD+2PJ6LKXKZdidqPEVQ55ZZzYKVhojKIWdFntaiNn4Hha+jmQVqNYVd/NRK3y97EXiz3Hpp+AL/JPbbqoo1svl95RQlAntuZbjbLvFE3tfuV1FUQAAAAAHAABdKHzPYf6vhVCwySNKG4SxDDbDpXlzfYjmMec14rGWSBALNWREtkFiF8E5PqALQVMeXWRXF0PFE2hq9J8jGf3Wsyp56yZ7dCHRkO9qELfaPz8YMNqurXPm75IfCpG4pbEK+VlCbx8r2Jomc1P7w3+1tPhRq9lk6Sp6Y9kwuz0kdnECuqIYPihaDNMTvlCjvfbdZjoqEYNeTGcIn7fHk8yLEsBesupz4rgNLanoiHJIu/NbpsyOIq6gGHIowEooGurCmMsqCfYIZWDltIeWbQim/z9PiepIXZszWTF+3Q8lxEM/FhYP4GQ5Q4fV5RDwIhlrIxn6BKg2MVf3HC6+yX/37VH607meEXWrLiX9uDUfUfuNiz2MhpbXcU3VV39TZ/i1BWHo2DPnqX6ruuhx472Y0pjfYFwCOm18UD+OJSnoPmDCAd59S74Z8J2woqvyHj9iQya6ecb/3KSFb5KyxHLuaoADc4pO3g3ZQ5Uln/R49DSyf44/QAvt2tC4zyBn6nj2hKi686IKbqlGIOSBb3PzFwk8N5lJKHF2gwKL4WUDM+yhW5xALxQCwtc1IEskVmAHXYp0RFz8kyc+2oPhnnZ0yqVhDk2C5OtZ3GVg22zmb372SgRslDOF1Lruj9tkM3GcJUl0EVU86enLuGmwLF2zWX8vdIChJqBm0uEYI6v+SdF7gR04Ig7XmEuBMywprk6PvlhAloxc9m7zFQQpO4Mrv+wjZHFUdw1tNmgy605/HIDkZfM6HJBT08B0WNMyKZ0Mxoc/UjrowSGVtZYK19DlgWZyKrBPa1l4KfuZIWynQg1kqviPs6H/fpHruskY7qmqspiO20/sLraui7F6cf5XWaiEtFL3RHR8qFNeyqJ3Jmv6lLhlXGeJU169UnqLSbRiGGE0683pT2lrb83aNSe2F1DxYOHIZuMvGktSmxBKilIpVh2J/jj4qiMKgg0OKOWh1x1bKfepmPXN66WCll6iV7PEKx2ZrAR36pvBRcV/oSrxi8nq3UVxjQpLymWP8ggm8YNFyItIaQDDURJJvVJ9XYKT5nEklSIiegeR6xssh2VJjE23zhs5lZo8N42yBBSYL8eSvRg7RNcOvgCmZ29ngX0yJie6go5r4YbT7FZFJtsbyBIodt/yXaUdWQ6G/KQJyCeSBnyUwzaidEiIeFO6bkIybf1TKGZFS+VcMo2l5yfKAqgY4FpDZZc5hpbsvgX7J/FUBs0g2VuRfxcPHjrZw7/yTbHOYi1STN4YV8p+BE+1A5BMDHv+P8nEkKN+ueNhMYqPcMu86Dr95Cor0fQpMaa27K6vnLJTkVR7DeRxDmTFqNnZ0hyNyWpdiCPo5SgOJZYcGWYEyBuv7G8pZvnYWTLTd6TEBASVMttfZsmkFsF/BXRgItbI/T5yJ5dsTERAbtHILFxJOf8hELRWxInk4VzrmvuEokZ88lgkAcyLul4bt2IvE1rdEfceJDWzGMH4IJGOnBXuGPbG22GOPJMia4DcTtP212keHvvkLoMk2qUSpAB79TWLAuBVCNOfsrj/ugsUOq9bvVCtULB1by5XrZzgFdZqYr6KLihuUTys6CcTR+4IlIfeNUxS0M1mOB8lnVw18VVL2QlW/VRUJwFJTs4aJBpGA7dvU44iq56Th/a9+TuIbR+fn8C//ucV/GZRuRiMkNrnmLR68SMEnNHdu50TK8YUYLLtq3bNHmb1dDcnHjNLThGOkBK/GbX50i06kxMc1jEwxt8Km5kNMRX7No7YpR66LAFT0i3tijP/lLUmq8sTMwCGnTU6O49zasOZ1k7LRY1fzojjhwrD+EWfID2wjrKZ4n0aDKZ2Tk3+ng2GHaOVzjx8ItYVs79jZfvxwgYsuzpq3cewk7swroOV9H99kdwvrWSvsgpX2hOmKdezLKZYzH8fbtFQY8JctSVORhUFpv+2FJmM9XMY8lXHapJqxzCZM7A4CbG3oOeNcSGzJx6k0UPZsrbJa0Xy99olfYQufnWupRMk2uTx7XItOL1QNnkyz5y2jNgED9xZCZ3ih/jJoI2sZL9LS6n/nT9lrA3DQjmDUYP8NSZmf/v5knvoGyRO5kqshALuQFN15riCsAnV4/ChZotJzpQu2mmztpVFh4F24Q8FBt95iu5fLH6ekf3p7O8ZD8CNncLPrdsRdG2+Pj62sWcekr4LSU5YY0E1R/zAJd3u6tMtz/I7ydDDNlOD4p+Mn98JtVCNk7ApxiU2ERpxyrR3gFyZ5QEpky5RR/avjqqkCAptDrWz/WgIEDlza0x9GfE7GRrcqG4jvjrY5kJPc7Y9FaIoCdAu3j7SGgmer+H4luLBezm6HPYoEwdfEij9Wr9jKEux6bsQE3CMRq0j0oSvwpYR/2gB0iVIzwvUARvRWAYbjEssAAAAAA==');
