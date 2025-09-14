# AGENTS instructions

This repository provides documentation and tests for GLSL built-in functions. To add a new function or update existing ones, follow these guidelines.

## Structure

- Implementations live under `test/built-in-functions/` and are written in TypeScript (`.mts`).
- Unit tests reside in `test/spec/` as JavaScript (`.mjs`) files using the `ava` framework.
- Documentation for each function is located in `docs/built-in-functions/` and loads the implementation and tests via `raw-loader`.
- Vector helpers such as `vec2`, `vec3`, and `vec4` are defined in `test/basic-types`.

## Development
- Use Node.js 18 or later.
- Run `npm test` before committing to ensure all tests pass.
- Keep code style consistent with existing files (4-space indentation, ES modules).

