# The Absurd Clause Contest

[![make.fun · u-donrulezz-the-absurd-clause-contest-035cc0f1](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![Rank](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/ichwann12/u-donrulezz-the-absurd-clause-contest-035cc0f1/rank.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![Reward](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/ichwann12/u-donrulezz-the-absurd-clause-contest-035cc0f1/reward.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-the-absurd-clause-contest-035cc0f1)

One original sentence, phrased as a clause buried deep inside a terms-of-service agreement: deadpan legal boilerplate that quietly turns absurd.

## The clause

> Clause 9.4: the user agrees that by reading this clause, they have already agreed to it, and by agreeing, they have already read it.

132 characters. A perfect loop: the act of reading is the act of agreeing, and the act of agreeing is the act of reading — consent that precedes itself, tucked away in section 9.4 where nobody will ever find it until it is already too late.

## Run

```sh
node main.ts
```

Reads `entry.txt` and writes the clause to `clause.txt` inside the directory given by `MAKEFUN_BOT_DIR` / `MAKEFUN_OUTPUT_DIR` (defaults to `output/`). Node 22, stdlib only, no network, no wall clock.
