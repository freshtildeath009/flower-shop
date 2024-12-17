<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Styles / Scripts -->
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @else
    @endif
</head>

<body class="font-sans antialiased bg-white dark:text-white/50">
    <div class=" text-black/50 bg-white dark:text-white/50">

        <div
            class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
            <div class="relative w-full max-w-7xl px-6 lg:max-w-7xl">
                <header class="flex justify-center items-center ">
                    <h1 class="text-black" style="font-size: 2rem;">Dashboard</h1>
                </header>
                <main class="mt-6 ">
                    @if (Route::has('login'))
                        <div class="-mx-3 flex flex-1 justify-center">
                            <<div
                                class="border-2 border-gray-300 p-12 rounded-lg shadow-lg flex flex-col items-center text-center space-y-6"
                                style="padding: 4rem">
                                @auth
                                    <a href="{{ url('/dashboard') }}"
                                        class="rounded-md px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75 transition duration-200">
                                        <p class="text-lg font-semibold dashboard">Dashboard</p>
                                    </a>
                                @else
                                    <a href="{{ route('login') }}"
                                        class="rounded-md px-6 py-3 text-black border-2 border-gray-300 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75 transition duration-200">
                                        <p>Login</p>
                                    </a>

                                    @if (Route::has('register'))
                                        <a href="{{ route('register') }}"
                                            class="rounded-md px-6 py-3 text-black border-2 border-gray-300 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75 transition duration-200">
                                            <p>Register</p>
                                        </a>
                                    @endif
                                @endauth
                        </div>

            </div>
            @endif
            </main>

            <footer class="py-16 text-center text-sm text-black dark:text-white/70">

            </footer>
        </div>
    </div>
    </div>
</body>

</html>
