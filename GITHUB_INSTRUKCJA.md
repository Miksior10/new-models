# Instrukcja dodania projektu na GitHub

## Krok 1: Skonfiguruj Git (jeśli jeszcze nie zrobione)

Otwórz terminal w folderze #3 i wykonaj:

```bash
git config --global user.name "Twoje Imię"
git config --global user.email "twoj@email.com"
```

Lub tylko dla tego repozytorium (bez --global):
```bash
git config user.name "Twoje Imię"
git config user.email "twoj@email.com"
```

## Krok 2: Dodaj pliki i zrób commit

```bash
cd "C:\Users\maxxi\Desktop\wazne\egzamin\JS\13.11.2025\#3"
git add systemy.html styl.css skrypt.js cyfry.gif
git commit -m "Initial commit: Systemy liczbowe website"
```

## Krok 3: Utwórz repozytorium na GitHub

1. Zaloguj się na https://github.com
2. Kliknij przycisk "+" w prawym górnym rogu
3. Wybierz "New repository"
4. Wpisz nazwę repozytorium (np. "systemy-liczbowe")
5. **NIE zaznaczaj** "Initialize this repository with a README"
6. Kliknij "Create repository"

## Krok 4: Połącz lokalne repozytorium z GitHub

GitHub pokaże Ci instrukcje. Wykonaj w terminalu:

```bash
cd "C:\Users\maxxi\Desktop\wazne\egzamin\JS\13.11.2025\#3"
git remote add origin https://github.com/TWOJA_NAZWA_UZYTKOWNIKA/NAZWA_REPOZYTORIUM.git
git branch -M main
git push -u origin main
```

**Uwaga:** Zamień `TWOJA_NAZWA_UZYTKOWNIKA` i `NAZWA_REPOZYTORIUM` na rzeczywiste wartości!

## Alternatywnie - użyj GitHub CLI (jeśli masz zainstalowane)

```bash
gh repo create --public --source=. --remote=origin --push
```

## Klonowanie repozytorium na innym komputerze

Aby pobrać projekt na nowy komputer:

```powershell
cd "C:\sciezka\do\folderu\gdzie\chcesz\projekt"
git clone https://github.com/Miksior10/new-models.git
cd new-models
```

Lub z własną nazwą folderu:

```powershell
cd "C:\sciezka\do\folderu\gdzie\chcesz\projekt"
git clone https://github.com/Miksior10/new-models.git nazwa-foldera
cd nazwa-foldera
```

## Synchronizacja zmian

### Pobieranie zmian z GitHub (pull)

```powershell
cd "C:\Users\maxxi\Desktop\wazne\egzamin\JS\13.11.2025\#3"
git pull origin main
```

### Wypychanie zmian na GitHub (push)

```powershell
cd "C:\Users\maxxi\Desktop\wazne\egzamin\JS\13.11.2025\#3"
git add .
git commit -m "Opis zmian"
git push origin main
```

### Wypychanie konkretnych folderów

```powershell
cd "C:\Users\maxxi\Desktop\wazne\egzamin\JS\13.11.2025\#3"
git add systemy-liczbowe/ cukierki/ chat/
git commit -m "Opis zmian"
git push origin main
```

### Sprawdzanie statusu

```powershell
cd "C:\Users\maxxi\Desktop\wazne\egzamin\JS\13.11.2025\#3"
git status
```

### Wyświetlanie historii commitów

```powershell
cd "C:\Users\maxxi\Desktop\wazne\egzamin\JS\13.11.2025\#3"
git log --oneline
```

