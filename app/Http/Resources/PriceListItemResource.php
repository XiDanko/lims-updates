<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');