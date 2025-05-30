#FROM debian:bookworm
FROM postgres:17
RUN DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y tzdata
# containerの中では、systemdは動いていないぽいので、timezoneの設定
# は別の方法ですること。
#run ls -la /etc/timezone
run echo 'Asia/Tokyo' > /etc/timezone
ENV TZ=Asia/Tokyo
#run apt-get update && apt-get install -y systemd
#run apt-get update && apt-get install -y postgresql-15
RUN apt-get update && apt-get install -y locales && rm -rf /var/lib/apt/lists/* \
	&& localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8
ENV LANG ja_JP.utf8

