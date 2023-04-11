<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
