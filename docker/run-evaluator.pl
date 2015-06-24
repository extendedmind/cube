#!/usr/bin/perl

# Workaround SIGTERM not being handled by bash
$SIG{TERM} = sub {
  die "exiting evaluator...\n"
};
system "/usr/local/bin/node bin/evaluator /etc/cube/evaluator-config.js";
