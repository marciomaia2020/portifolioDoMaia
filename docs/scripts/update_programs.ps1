# PARA EXECUTAR ESTE SCRIPT FAÇA
# Pressione Win + S, digite "PowerShell", e clique em Windows PowerShell para abrir o terminal.
# cd "C:\caminho\para\sua\pasta"
# Execute o script digitando .\update_programs.ps1 e pressionando Enter.



# update_programs.ps1
# Script para atualizar programas usando o winget no PowerShell de forma silenciosa

Write-Output "Iniciando atualizações de programas..."

# Lista de IDs dos programas para atualização
$programs = @(
    "Git.Git",
	"GitHub.GitHubDesktop",
    "Notepad++.Notepad++",
    "clsid2.mpc-hc",
    "OpenJS.NodeJS",
    "Oracle.JDK.17",
    "Microsoft.Edge",
    "Brave.Brave",
	"Google.Chrome.EXE",
    "Opera.Opera",
    "Schniz.fnm",
    "Python.Python.3.12",
    "Microsoft.VisualStudioCode",
    "Microsoft.DevHome"
)

# Diretório e nome do arquivo de log
$logFile = "D:\SCRIPTS\Erros\update_log.txt"

# Loop para atualizar cada programa
foreach ($program in $programs) {
    Write-Output "Atualizando $program..." | Out-File -FilePath $logFile -Append
    try {
        # Tenta atualizar silenciosamente e redireciona a saída e erro para o log
        winget upgrade --id $program -e --silent *>> $logFile
    } catch {
        # Em caso de erro, escreve o erro no log
        "Erro ao atualizar $program: $_" | Out-File -FilePath $logFile -Append
    }
}

Write-Output "Atualizações concluídas!" | Out-File -FilePath $logFile -Append

# Comente para tirar qualquer interação ao usuário
# Read-Host -Prompt "Pressione Enter para fechar"