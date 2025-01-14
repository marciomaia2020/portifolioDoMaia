function activate{
    param([string]$path = ".\venv\Scripts\Activate")
    if (Test-Path $path) {
        & $path
    } else {
        Write-Host "O caminho para o ambiente virtual não foi encontrado: $path" -ForegroundColor Red
    }
}
