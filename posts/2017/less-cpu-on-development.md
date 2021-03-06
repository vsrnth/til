---
date: '2017-07-12'
title: Make Rails (and other dev servers) use less CPU
tags: [Development, Linux]
description: Is Rails eating your CPU in development? Try this nifty trick.
book: archive
---

Is Rails eating your CPU in development? Try lowering its priority using [renice(1)](http://manpages.ubuntu.com/manpages/zesty/en/man1/renice.1.html), a standard BSD utility that should be available in OS X and most Linux distributions. Here's a shell script that will automatically reset the priority to `+15` to common development processes:

<Figure code title='renice-dev.sh'>

```sh
#!/usr/bin/env sh
sudo renice +15 -p $(ps ax | grep -E 'ruby|node|watchman|postgres' | grep -v grep | awk '{print $1}' | tr '\n' ' ')
```

</Figure>

Save this as `renice-dev` into one of your `bin` paths, and give it a `chmod +x renice-dev`. You can type `renice-dev` after you start your development processes to "renice" them.

### What is +15?

This is the priority to be assigned to matching processes. The lowest priority is `+19` (only run when nothing else is running), the default is `0`, and the highest is `-20` (makes things go very fast).

## References

- [Throttling processes in OS X](https://tinyapps.org/blog/mac/201107230700_throttle_process_os_x.html) _(tinyapps.org)_
