<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
