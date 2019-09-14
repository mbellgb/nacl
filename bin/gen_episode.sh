#!/bin/bash -xe

episode_file=$1

episode_slug=$2

duration=$(ffprobe -show_entries \
	format=duration -v error \
	-of default=noprint_wrappers=1:nokey=1 \
	"${episode_file}" | sed 's/\..*//g')

file_size=$(du "${episode_file}" | cut -f1)

file_extension=$(echo "${episode_file}" | egrep -o '\.[a-z0-9]+$')

remote_name="static.nacl.bell.wtf/episodes/${episode_slug}${file_extension}"

gsutil cp "${episode_file}" "gs://${remote_name}"

echo "duration: ${duration}"

cat >"./_episodes/${episode_slug}.md" <<EOF
---
title: "Enter title"
date: $(date -u +"%Y-%m-%dT%H:%M:%SZ")
audio_file: https://storage.googleapis.com/${remote_name}
audio_type: audio/x-m4a
audio_length: ${file_size}
duration: ${duration}
season: x
episode: y
description: edit me
guid: nacl/$(uuid)
---

Description here
EOF
