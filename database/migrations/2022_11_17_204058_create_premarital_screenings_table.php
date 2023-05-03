<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
