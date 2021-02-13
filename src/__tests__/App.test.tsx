import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders Home route", () => {
    const homeRoute = screen.getByText(/MJ/) as HTMLLinkElement;
    expect(homeRoute).toBeInTheDocument();
  });

  it("renders Projects route", () => {
    const projectsRoute = screen.getByText(/Projects/);
    expect(projectsRoute).toBeInTheDocument();
  });

  it("renders Blog route", () => {
    const blogRoute = screen.getByText(/Blog/);
    expect(blogRoute).toBeInTheDocument();
  });

  it("renders copyright", () => {
    const copyright = screen.getByText(/Copyright © 2021 Monika Janas/)
    expect(copyright).toBeInTheDocument();
  });
});