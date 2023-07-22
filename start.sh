#!/bin/bash

( cd svelte-frontend && npm run build )

( cd backend && cargo run )
