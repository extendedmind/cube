#!/usr/bin/perl

# Workaround SIGTERM not being handled by bash
$SIG{TERM} = sub {
  die "exiting collector...\n"
};
system "/usr/local/bin/node bin/collector /etc/cube/collector-config.js";
