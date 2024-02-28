<!doctype html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1280, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name='designer' content='Jalal Al-Mussawi, xidanko07@gmail.com'>
    <link rel="apple-touch-icon" sizes="180x180" href="/storage/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/storage/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/storage/favicon/favicon-16x16.png">
    <link rel="manifest" href="/storage/favicon/site.webmanifest">
    <link rel="mask-icon" href="/storage/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="/storage/favicon/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="/storage/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <title>LIMS</title>
    @vite('resources/ts/main.ts')
</head>
<body {!! app()->getLocale() === 'ar' ? 'dir="rtl"' : 'dir="ltr"' !!} class="bg-gray-100 text-gray-600">
    @if(cache()->has('activation.remainingDays') && cache('activation.remainingDays') <= 7)
        <div class="fixed bg-red-500 text-white font-bold z-[100] inset-x-0 top-0 px-2">Application will be expired in {{ cache('activation.remainingDays') }} days.</div>
    @endif
    <div id="app"></div>
    <script>
        window.translation = {!! file_get_contents(lang_path(app()->getLocale() . '.json')) !!}
    </script>
</body>
</html>
