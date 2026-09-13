# Process overview

Written by you, for a reader: how you got from the brief to the harness and
agentic workflow behind this submission. Markers read this file and follow its
citations; they don't trawl the repo for evidence you didn't point at.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and its
[word counts](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts)
cover every deliverable.

## What I built

SLOP1163, a twelve-week course born out of a conversation with genAI. I built
the rules that govern the structure of the course, then layered money and
company onto that structure — tweaking the assessments and policies until
the whole thing read as one coherent course rather than twelve separate
weeks.

## How I got here

I asked genAI what it couldn't do, and it told me: experience things. That
raised the question the whole course sits inside — if experience comes down
to something each of us only has for ourselves, are we ever actually taught
how to experience things? University certainly doesn't teach it directly. So
the first, philosophical layer of the course is that differentiation itself:
experiencing something is not the same act as interpreting it, assimilating
it, internalizing it, or describing it, and telling those apart is the
discipline the twelve weeks train
([`31f5821...8e76b7b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-p-venkatram/compare/31f5821...8e76b7b)).

Grouping the twelve experiences into four units — Immediate Sensation, The
Idling Mind, Memory & Others, Scale & Release — is a separate decision from
that layer, not another instance of it. It's a classification, closer to
explaining behaviour and characteristics than to the philosophical question
above.

The second and final layer is external factors that contribute to an
experience without being the experience itself: money, and company. If an
experience doesn't line up with what you expected, it can still cause grief;
a poorly designed one can produce boredom even with money behind it; some
people find comfort *because* of money, not despite it. That's not a flaw in
the idea, it's the data — so every alternate week now disburses a $100 grant
toward that week's practicum, receipts required
([`3ff5108`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-p-venkatram/commit/3ff5108)):

> Let the student receive a grant of $100 every week to make the experience
> come true. The grant money is accessible every alternate week. This also
> lets the user understand how money is an influencing factor to experiences.

Company is the other half of the same layer. Two new experiences — the
thrill of anticipation right before something begins, and the warmth of
morning sunlight — became a fifth assessment, each curated once with someone
known and once with a stranger
([`9265086`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-p-venkatram/commit/9265086)):

> These two experiences to curate with someone you know and someone you
> don't know. Flexible number of people to go with it all.

Neither layer was planned in advance — the philosophical one grew out of
asking genAI a single question, and the external-factors one only occurred
to me afterward — but both kept landing on the same question the course
opened with.

Nothing here went wrong severely enough to need fixing. What went right was
the layering itself: money and companionship weren't required by the brief,
but choosing to add them is what makes this course feel mine rather than a
competent execution of someone else's spec. That was what was missing until
I added it.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
