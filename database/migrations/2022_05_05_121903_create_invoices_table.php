<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');