# ベースイメージ（Node.jsのバージョン20、軽量版alpine Linuxを使う）
FROM node:20-alpine

# コンテナ内の作業ディレクトリを指定
WORKDIR /app

# 依存関係ファイルだけ先にコピー（キャッシュ効率のため）
# ※まだpackage.jsonがないので、初回ビルド時はエラーになる可能性がありますが、
#   のちほど説明する手順で解決します。
COPY package*.json ./

# 依存関係をインストール
# (package.jsonがある場合のみ実行されるようにシェルスクリプトで制御しても良いですが
#  今回はシンプルにします。初回は無視してOKです)
RUN npm install

# ホストのファイルをすべてコンテナにコピー
COPY . .

# Next.jsが使うポートを開放
EXPOSE 3000

# コンテナ起動時に実行するコマンド（開発モード）
CMD ["npm", "run", "dev"]