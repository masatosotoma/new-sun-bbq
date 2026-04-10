$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()

Write-Host "Listening on http://localhost:8080/"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $requestUrl = $context.Request.Url.LocalPath
        $file = "c:\Users\masat\dev\website-business-limark\new-sun-bbq" + $requestUrl
        if ($requestUrl -eq "/") { $file = "c:\Users\masat\dev\website-business-limark\new-sun-bbq\index-standalone.html" }
        
        $context.Response.Headers.Add("Access-Control-Allow-Origin", "*")
        
        if (Test-Path $file) {
            $content = [System.IO.File]::ReadAllBytes($file)
            $context.Response.ContentLength64 = $content.Length
            $context.Response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $context.Response.StatusCode = 404
        }
        $context.Response.Close()
    }
} finally {
    $listener.Stop()
}
