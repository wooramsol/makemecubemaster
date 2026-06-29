#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MSG="${1:-chore: update blinktype}"

cd "$ROOT"
npm run build
git add -A
if git diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi

git commit -m "$MSG"
git push "$(git -C /workspace remote get-url origin)" HEAD:blinktype-import
echo "Pushed to makemecubemaster/blinktype-import — GitHub Actions will sync to blinktype."
